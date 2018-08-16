import axiosInstance from '~/plugins/axios'
import Qs from 'qs'
// import store from '~/store'
import { Observable, empty } from "rxjs";

const getType = ['GET', 'DELETE'] // 使用GET请求类型

export class NetService {
  public static requestQueue = new Map()
  private userToken
  private store

  public static generateRequestUrl({ service, controller, action, url }: { service: string, controller: string, action: string, url?: string }, append = [], sort?): String {
    // 自定义url优先级最高
    if (url) return url

    // 进行url拼接
    if (controller) {
      let targetUrl = [
        controller,
        action,
        ...append].filter(x => x).join('/')

      return targetUrl
    } else {
      throw new Error('server配置异常,请检查对应server配置')
    }
  }

  /**
   * 生成头部信息
   */
  private generateRequestHeader(headers = {}) {
    // return Object.assign(headers, store.state.user ? {
    //   "X-Operator-Id": store.state.user.id
    // } : {})
  }

  /**
   * 过滤空数据
   * @param data
   */
  private filterEmptyData(data) {
    Object.entries(data)
      .filter(([key, value]) => {
        // 过滤空字符串
        if (value === undefined || value === "") {
          return true
        }

        // 过滤空数组
        if (value instanceof Array && (value.length === 0 || value.every(x => x === ''))) {
          return true
        }
      })
      .forEach(([key, value]) => {
        delete data[key]
      });
    return data
  }

  /**
   * 异常处理
   */
  private catchHandle(options, observer) {
    return (ex) => {
      // 删除任务请求队列
      NetService.requestQueue.delete(options.id)

      if (options.loading && options.loading.state) {
        options.loading.state = false
      }

      // 逻辑异常检测
      if (ex.errmsg === undefined) {
        console.error(ex.stack)
        return empty()
      } else {
        return observer.error(ex.errmsg)
      }
    }
  }

  /**
   * 发送网络请求信息
   * @param param0
   */
  public send(options: any, observer?) {
    let data = Object.assign({}, options.data)
    let postData
    let getData

    let url = NetService.generateRequestUrl(options.server, options.append, options.sort)
    let method = options.server.type || 'GET'
    let headers = options.headers || {}

    // 分页检测
    if (options.page) {
      data = Object.assign(data, options.page.getConfig())
    }

    // 判断参数类型
    getType.indexOf(method) > -1 ? (getData = this.filterEmptyData(data)) : (postData = data)

    NetService.requestQueue.set(options.id, options)

    // 创建待观察对象
    axiosInstance.request({
      method,
      url,
      headers,
      data: postData,
      params: getData,
      paramsSerializer: (params) =>
        Qs.stringify(params, {
          arrayFormat: 'repeat',
          skipNulls: true,
          allowDots: true
        })
    }).then(({ data: result }) => {
      // 删除任务请求队列
      NetService.requestQueue.delete(options.id)

      if (result.status !== 'SUCCESS') {
        return this.catchHandle(options, observer).call(this, {
          errmsg: result.msg
        })
      }

      let data = result.object

      // 分页数据处理
      if (options.page && data.content) {
        options.page.update(data)
        data = data.content
      }

      observer.next(data)
    }).catch(this.catchHandle(options, observer))
  }
}

import "reflect-metadata";
import { createDecorator } from 'vue-class-component'
import injector from 'vue-inject';
import { Observable,empty } from "rxjs";
// import { NetService } from '~/utils/net.service';
// import * as UUID from "uuidjs";
// const netService = new NetService()

/**
 * 组件内依赖注入
 * @param target
 */
export function Dependencies(target?: any) {
  return createDecorator((componentOptions, key) => {
    if (!injector.$$factories[key] && target) {
      injector.service(key, target);
    }

    if (typeof componentOptions['dependencies'] === 'undefined') {
      componentOptions['dependencies'] = []
    }

    if (Array.isArray(componentOptions['dependencies'])) {
      componentOptions['dependencies'].push(key)
    }
  })
}


/**
 * 直接依赖注入
 */
export function Inject(target?): PropertyDecorator {
  return function (container, key) {
    if (!injector.$$factories[key] && target) {
      injector.service(key, target).lift;
    }

    try {
      container[key] = injector.get(key);
    }
    catch (ex) {
      console.warn(ex)
    }
  }
}

/**
 * 函数去抖动
 * @param time
 */
export function Debounce(time: number = 500) {
  return function (target, name, descriptor) {
    var oldValue = descriptor.value;
    let flag
    descriptor.value = function () {
      if (flag) {
        return empty()
      } else {
        flag = setTimeout(() => {
          flag = null
        }, time)
      }
      return oldValue.apply(target, arguments);
    };

    return descriptor;
  }
}

/**
 * 设置布局
 * @param target
 */
export function Layout(option: any) {
  if (typeof option === 'string') {
    return function (target) {
      target.$layout = option;
      return target;
    }
  }

  if (typeof option === 'object') {
    return function (target) {
      //TODO: 修改option配置
      return target;
    }
  }
}

/**
 * 权限码中间件
 * @param target
 */
export function Auth(code: Number) {
  return function (target) {
    target.$auth = code;
    return target;
  }
}


/**
 * 设置扩展属性
 * @param extend
 */
export function Extend(data: Object) {
  return function (target) {
    Object.entries(data).forEach(([key, value]) => {
      target[key] = value;
    })

    return target;
  }
}


/**
 * 网络请求行为装饰器
 */
// export function Request({ server }) {
//   return function (target, name, descriptor) {
//     var oldValue = descriptor.value;
//     let uuid = UUID.generate()
//     descriptor.value = function () {
//       let option = oldValue.apply(target, arguments);

//       // 队列约束
//       let data = NetService.requestQueue.get(uuid)

//       if (data) {
//         return Observable.empty()
//       }

//       return Observable.create((observer) => {
//         netService.send(Object.assign({
//           id: uuid,
//           server
//         }, option), observer)
//       })
//     };

//     return descriptor;
//   }
// }
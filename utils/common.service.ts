export class CommonService {
  public static getCookie(cookie, name) {
    // 空验证
    if (!cookie || !name) {
      return undefined
    }

    let cookieList = cookie.split(';').map(x => x.trim())
    var data = cookieList.find(x => x.startsWith(`${name}=`))
    if (data) {
      return data.split('=')[1]
    } else {
      return undefined
    }
  }
}
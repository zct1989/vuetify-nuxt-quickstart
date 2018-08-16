import { loginController } from "~/config/server"
import { Request } from "~/core/decorator";



export class LoginService {
  /**
   * 用户登录
   * @param data 
   */
  @Request({
    server: loginController.login
  })
  login({ username, password }): any {
    return {
      data: {
        userUsername: username,
        userPassword: password,
        loginDevice: 0,
      }
    }
  }
}
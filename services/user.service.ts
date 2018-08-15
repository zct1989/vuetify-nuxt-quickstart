import { userController } from "~/config/server"
import { Request } from "~/core/decorator";



export class UserService {
  /**
   * 用户登录
   * @param data 
   */
  @Request({
    server: userController.login
  })
  login(data: { username: string, password: string }): any {
    return {
      data: {
        username: data.username,
        password: data.password
      }
    }
  }
}
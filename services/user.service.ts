import { userController } from "~/config/server"
import {  Request } from "~/core/decorator";



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

  /**
   * 用户注册
   * @param data 
   */
  @Request({
    server: userController.register
  })
  register(data: { username: string, realname: string, password: string }): any {
    return {
      data: {
        username: data.username,
        realname: data.realname,
        password: data.password
      }
    }
  }

  /**
   * 获取用户列表
   * @param auth 
   * @param page 
   */
  @Request({
    server: userController.getUserList
  })
  getUserList(auth): any {
    return {
      data: {
        auth: auth ? 1 : 0
      }
    }
  }

  @Request({
    server: userController.updateUserState
  })
  updateUserState({ id, state }): any {
    return {
      data: {
        id,
        state: state ? 1 : 0
      }
    }
  }

  @Request({
    server: userController.updateAdminState
  })
  @Reflect.metadata('design:returntype', 'string')
  updateAdminState({ id, state }) {
    return {
      data: {
        id,
        state: state ? 1 : 0
      }
    }
  }

  @Request({
    server: userController.resetPassword
  })
  resetPassword(id): any {
    return {
      data: {
        id
      }
    }
  }

  @Request({
    server: userController.authUser
  })
  authUser(id): any {
    return {
      data: {
        id
      }
    }
  }

  @Request({
    server: userController.queryUser
  })
  queryUser(name): any {
    return {
      data: {
        name
      }
    }
  }
}
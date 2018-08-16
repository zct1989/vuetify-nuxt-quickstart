const createLoginService = () => import('~/services/login.service')
import { CommonService } from '~/utils/common.service'
import { setToken } from '~/plugins/axios'

function updateUserByToken(token, dispatch) {
  return new Promise((reslove) => {
    createLoginService().then(({ LoginService }) => {
      const loginService = new LoginService()
      loginService.getUserInfoByToken(token).subscribe(async data => {
        await dispatch('updateUserLoginData', data)
        reslove(true)
      }, async err => {
        await dispatch('cleanUserLoginData')
        reslove(false)
      })
    })

  })
}

export default async function ({ store: { state, dispatch, commit }, req, redirect }) {
  if (process.client) {
    // setToken(token)
    return
  }

  // 获取token
  let token = CommonService.getCookie(req.headers.cookie, 'token') || state.token

  if (token && await updateUserByToken(token, dispatch)) {
    setToken(token)
  } else {
    redirect('/login')
  }
}



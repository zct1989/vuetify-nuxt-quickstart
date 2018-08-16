export const loginController = {
  login: {
    controller: 'LoginController',
    action: 'login',
    type: 'POST'
  },
  getUserInfoByToken: {
    controller: 'LoginController',
    action: 'getUserInfoByToken',
    type: 'GET'
  },
  ttt: {
    controller: 'carBrandController',
    action: 'getAllCarBrand',
    type: 'GET'
  }
}
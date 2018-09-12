import { CommonService } from '~/utils/common.service'
// const createUtilService = () => import('~/services/util.service')


// function updateDictData({ state, commit }, reslove) {
//   createUtilService().then(({ UtilService }) => {
//     const utilService = new UtilService()
//     utilService.findAllDictionary().subscribe(async data => {
//       commit('updateGlobalDict', data)
//       reslove(true)
//     }, async err => {
//       reslove(false)
//     })
//   })
// }

// function updateUserDictData({ state, commit }, reslove) {
//   createUtilService().then(({ UtilService }) => {
//     const utilService = new UtilService()
//     utilService.findOrgAll().subscribe(async data => {
//       commit('updateUserDict', data)
//       reslove(true)
//     }, async err => {
//       reslove(false)
//     })
//   })
// }


/**
 * 加载用户数据
 */
function loadUserData(store) {
  return Promise.all([
    updateUserDictData
  ].map(x => new Promise(reslove => {
    x(store, reslove)
  }))).then(() => {
    store.commit('updateUserReady')
  })
}

/**
 * 加载全局数据
 */
function loadGlobalData(store) {
  return Promise.all([
    updateDictData
  ].map(x => new Promise(reslove => {
    x(store, reslove)
  }))).then(() => {
    store.commit('updateGlobalReady')
  })
}

/**
 * 数据初始化
 * 1. 全局数据初始化
 * 2. 用户数据初始化
 * @param {*} param0
 */
export default async function ({ store, req }) {
  let { state } = store

  if (state.ready.user && state.ready.global) {
    return
  }

  let globalTaskPromise = Promise.resolve()
  let userTaskPromise = Promise.resolve()

  // if (process.server) {
  //   const token = CommonService.getCookie(req.headers.cookie, 'token') || state.token
  //   globalTaskPromise = loadGlobalData(store)
  //   // 存在用户token时，执行用户任务
  //   if (token) {
  //     userTaskPromise = loadUserData(store)
  //   }
  // }

  // if (process.browser && !state.ready.user && state.token) {
  //   userTaskPromise = loadUserData(store)
  // }

  // 等待任务执行完成
  await Promise.all([
    globalTaskPromise,
    userTaskPromise
  ])
}

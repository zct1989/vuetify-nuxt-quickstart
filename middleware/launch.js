/**
 * TODO:初始启动逻辑
 * @param {*} param0 
 */
export default async function ({ isServer, store: { state, dispatch, commit }, req, redirect }) {
  if (process.BROWSER_BUILD) {
    return
  }

  // 仅在初始启动时执行
  if (state.launch === true) {
    return
  }
}
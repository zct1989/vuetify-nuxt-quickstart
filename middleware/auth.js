export default function ({ store: { state, dispatch, commit }, req, redirect }) {
  //TODO:这里做登录前的权限认证
  if(process.client){
    return
  }

  if(!state.user){
    redirect('/login')
  }
}

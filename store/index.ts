

export const state = () => ({
  launch: false,
  user: '',
  token: '',
  department: '',
  layout: {}
})

export const mutations = {
  updateUser(state, user) {
    state.user = user
  },
  updateToken(state, token) {
    state.token = token
  },
  updateDepartment(state, department) {
    state.department = department
  },
  updateLayoutConfig(state, option) {
    let { layout, config } = option
    state.layout[layout] = config
  }
}

export const actions = {
  async updateUserLoginData({ commit }, { user, token, sysOrg }) {
    commit('updateUser', user)
    commit('updateToken', token)
    commit('updateDepartment', sysOrg)
  }
}
export const state = () => ({
  launch: false,
  user: ''
})

export const mutations = {
  updateUser(state, user) {
    state.user = user
  }
}
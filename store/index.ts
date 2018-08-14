export const state = () => ({
  launch:false,
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
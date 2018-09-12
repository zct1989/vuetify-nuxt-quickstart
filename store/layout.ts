import cookies from 'js-cookie'
import { setToken } from '~/plugins/axios'

export const state = () => ({
  default: {},
  empty: {}
})

export const mutations = {
  updateLayoutConfig(state, option) {
    let { layout, config } = option
    state[layout] = config
  }
}

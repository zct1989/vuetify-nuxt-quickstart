import cookies from 'js-cookie'
import { setToken } from '~/plugins/axios'

export const state = () => ({
  // 数据准备状态
  ready: {
    user: false,
    global: false
  },
  // 用户数据
  user: '',
  // 用户token
  token: '',
  // 用户部门
  department: '',
  // 全局字典
  dictData: [],
  // 用户字典
  userDictData: []
})

export const mutations = {
  updateUserReady(state) {
    state.ready.user = true
  },
  updateGlobalReady(state) {
    state.ready.global = true
  },
  updateUser(state, user) {
    state.user = user
  },
  // 车辆搜索存储cookin
  upVehicleSearch(state, data) {
    state.data = data
    if (data) {
      cookies.set('caeSearch', data)
    }
  },
  // 清除车辆搜索cookin
  clearCaeSearch(state, data) {
    state.data = ''
    cookies.remove('caeSearch')
  },

  // 产品搜索存储cookin
  upVehicleSearchProduct(state, data) {
    state.data = data
    if (data) {
      cookies.set('productSearch', data)
    }
  },
  // 清除产品搜索cookin
  clearCaeSearchProduct(state, data) {
    state.data = ''
    cookies.remove('productSearch')
  },
  // 订单搜索存储cookin
  ordersStorage(state, data) {
    state.data = data
    if (data) {
      cookies.set('orderSearch', data)
    }
  },
  // 清除订单cookin
  clearOrder(state, data) {
    state.data = '',
      cookies.remove('orderSearch')
  },
  // 清除 cookin
  clear(state, data) {
    state.data = ''
    cookies.remove('token')
  },


  updateToken(state, token) {
    state.token = token
    setToken(token)
    if (token) {
      cookies.set('token', token)
    } else {
      cookies.remove('token')
    }
  },
  updateDepartment(state, department) {
    state.department = department
  },
  updateGlobalDict(state, data) {
    state.dictData = data
  },
  updateUserDict(state, data) {
    state.userDictData = data
  },
}

export const actions = {
  async updateUserLoginData({ commit }, { user, token, sysOrg }) {
    commit('updateUser', user)
    commit('updateToken', token)
    commit('updateDepartment', sysOrg)
  },
  async cleanUserLoginData({ commit }) {
    commit('updateUser', {})
    commit('updateToken', '')
    commit('updateDepartment', {})
  },
}
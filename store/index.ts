const layoutConfig = {
  default: {
    toolbar: true,
    title: 'test',
    leftDrawer: true,
    rightDrawer: false
  }
}


export const state = () => ({
  launch: false,
  user: '',
  layout: {
    default: layoutConfig.default
  }
})

export const mutations = {
  updateUser(state, user) {
    state.user = user
  },
  updateLayoutConfig(state, option) {
    let { layout, config } = option
    state.layout[layout] = Object.assign({}, layoutConfig[layout], config)
  }
}
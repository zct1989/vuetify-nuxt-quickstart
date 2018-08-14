const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'h5-6',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'web framework for h5' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.loli.net/css?family=Roboto:300,400,500,700|Material+Icons' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * 默认引用样式配置
   */
  css: [
    {
      src: '~/assets/style/app.less', // 默认样式文件
      lang: 'less'
    },
    'vuetify/dist/vuetify.css'
  ],
  /**
   * 插件配置
   */
  plugins: [
    '~/plugins/vuetify.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  router: {
    extendRoutes(routes) {
      // 默认路由为登陆页面
      routes.push( {
          path: '*',
          component:  path.join(__dirname, 'pages', '404.vue').replace(/\\/g, '\\\\')
        })
    },
    middleware: [
      'launch',
      'auth'
    ]
  },
  modules: [
    "~/modules/typescript"
  ]
}


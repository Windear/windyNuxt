const resolve = require('path').resolve
const LRU = require('lru-cache')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '5windy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    extendRoutes(routes) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    vender: [
      'element-ui',
    ],

    /*
     ** Run ESLint on save
     */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
    // 请求代理配置，解决跨域
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // axios: {
  //   baseURL: 'http://127.0.0.1:3000/ws',
  //   requestInterceptor: (config, { store }) => {
  //     if (store.state.token) {
  //       config.headers.common['Authorization'] = store.state.token
  //     }
  //     return config
  //   }
  // },
  proxy: [
    [
      '/design',
      {
        // target: 'http://www.5windy.com:5001/design',
        target: 'http://5windy.com:5001/design',
        pathRewrite: {
          '^/design': '/',
        }
      }
    ]
  ],
  babel: {
    "plugins": [
      ["component", [{
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]
    ],
    comments: true
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true }
  ],
  css: [
    { src: 'element-ui/lib/theme-chalk/index.css' }
  ],

}

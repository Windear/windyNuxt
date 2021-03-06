const resolve = require('path').resolve
const LRU = require('lru-cache')
const webpack = require('webpack')

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '有爱设计',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: '有爱设计', name: 'description', content: '有爱设计，Windy设计小站，这里可以有各种素材资源，sketch，XD，等等。欢迎大家前来观看。' }
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
            'element-ui', 'jquery'
        ],
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                'window.jQuery': 'jquery'
            })
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
            '/api',
            {
                // target: 'http://192.168.50.138:8000/',
                target: 'http://home.5windy.com:3333/',
                pathRewrite: {
                    '^/api': '/',
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
        { src: '~plugins/element-ui', ssr: true },
        { src: '~plugins/clipboard', ssr: true },
        { src: '~plugins/vue-lazyload', ssr: true }
    ],
    css: [
        { src: 'element-ui/lib/theme-chalk/index.css' }
    ],

}
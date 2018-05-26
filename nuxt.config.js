const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Bactoria's Blog",
    meta: [
      { charset: 'utf-8' },
      { property: "fb:app_id", content: '223610565072661' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/image/me2.jpg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  router: {
    middleware: 'category'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // With options
    '@nuxtjs/proxy'
  ],
  proxy: {
    // Simple proxy
    '/api' : {
      target : 'http://127.0.0.1:8080',
      changeOrigin: true,
      logLevel : 'debug'
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    },
    uglify: {
      uglifyOptions: {
        compress: false
      },
      cache: '/path/to/cache/dir'
    },
    vendor: [ 'babel-polyfill', 'eventsource-polyfill' ]
  }
}

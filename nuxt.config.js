const API_SERVER_HOST = require('./constants').API_SERVER_HOST
const CURRENT_ENV = process.env.NODE_ENV
const API_SERVER_URL = API_SERVER_HOST[CURRENT_ENV]

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  router: {
    fallback: true
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    host: API_SERVER_URL,
    port: 5000,
    prefix: '/api'
  },
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],
  css: ['normalize.css', 'swiper/dist/css/swiper.css'],
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'default-nuxt-structure',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'smallbites' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


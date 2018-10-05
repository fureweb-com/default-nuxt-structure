module.exports = {
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  router: {
    fallback: true
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
      { hid: 'description', name: 'description', content: '스몰바이츠 프로젝트(가칭)' }
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


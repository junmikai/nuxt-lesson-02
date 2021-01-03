export default {
  modules: ['@nuxt/http'],
  target: 'static',
  // serverMiddleware: ['~/middleware/api'],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        // 名前はなんでもいい
        name: 'custom',
        // 設定したいパス
        path: '/test',
        // 上記パスにアクセスした時どこにアクセスするか
        component: resolve(__dirname, 'pages/about.vue'),
      })
    }
  },
  head: {
    script: [
      {
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
        body: true
      }
    ]
  },
  css: ['@/assets/scss/main.scss'],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  server: {
    host: '0.0.0.0'
  },
  loading: '~/components/LoadingBar.vue',
}

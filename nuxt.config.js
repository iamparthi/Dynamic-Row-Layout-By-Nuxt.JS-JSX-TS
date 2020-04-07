export default {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
    },
    css: [
      '~/assets/css/main.css'
    ],
    build: {
      assetsPublicPath: '/',
      assetsSubDirectory: 'assets'
    },
    render: {
      bundleRenderer: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        }
      }
    }
  }
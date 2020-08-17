const CUSTOM_THEME = require('./src/ant-design-vue/theme')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          modifyVars: CUSTOM_THEME
        }
      }
    }
  }
}

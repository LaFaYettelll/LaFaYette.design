const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/LaFaYette.design/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#000000', // 将主题色改为黑色
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})

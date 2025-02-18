const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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

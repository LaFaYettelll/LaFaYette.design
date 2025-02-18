import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-theme-dark'; // 引入暗黑主题
import '@/assets/styles/global.less';

Vue.use(ElementUI) // 全局注册 Element UI

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

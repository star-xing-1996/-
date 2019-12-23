import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 1. router 文件夹，默认会加载在文件夹下的index.js文件
import router from './router'

Vue.use(ElementUI)
// 日志的详细与否，生产环境  开发环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

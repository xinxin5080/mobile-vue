import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './style/iconfont.scss'
import './style/reset.scss'
import Vant from 'vant'
import 'vant/lib/index.css'
// 图片预览
import VuePreview from 'vue-preview'
// 创建全局事件过滤器
Vue.filter('filtertime', function (time) {
  let timeObj = new Date(time)
  let y = timeObj.getFullYear()
  let m = timeObj.getMonth() + 1
  let d = timeObj.getDate()
  return y + '/' + m + '/' + d
})
Vue.use(VuePreview)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

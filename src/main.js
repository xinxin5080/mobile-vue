import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/iconfont.scss'
import './style/reset.scss'
import Vant from 'vant'
import 'vant/lib/index.css'
// 图片预览
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

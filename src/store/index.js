import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totelnum: 0
  },
  mutations: {
    addtotelnum: (state) => {
    // 获取本地存储的内容,找出num进行相加,最后赋值给totelnum
      let mycart = JSON.parse(localStorage.getItem('mycart') || '[]')
      let total = 0
      mycart.map(item => {
        total = item.num
      })
      state.totelnum = total
    }
  },
  actions: {

  }
})

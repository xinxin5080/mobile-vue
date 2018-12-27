import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: () => import(/* webpackChunkName: "member" */ './views/Member.vue')
    },
    {
      path: '/newsList',
      name: 'newslist',
      component: () => import(/* webpackChunkName: "member" */ './views/news/NewsList.vue')
    },
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: () => import(/* webpackChunkName: "newsdetails" */ './views/news/Newsdetails.vue')
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import(/* webpackChunkName: "instagram" */ './views/Instagram/Instagram.vue')
    },
    {
      path: '/imgDetail/:id',
      name: 'imgDetail',
      component: () => import(/* webpackChunkName: "imgDetail" */ './views/Instagram/ImgDetail.vue')
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: () => import(/* webpackChunkName: "imgDetail" */ './views/goods/Goodslist.vue')
    }
  ]
})

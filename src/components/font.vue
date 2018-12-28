<template>
  <div>
    <div id="font">
   <ul>
       <!-- 动态添加高亮 -->
       <!-- 01.通过三元表达式,判断当前的路由是否对应 -->
     <li :class="$route.name ==='home' ? 'active':''" @click="jumpTo('home')">
       <i class="iconfont icon-home"></i>
       <p>首页</p>
     </li>
     <li :class="$route.name ==='member' ? 'active':''" @click="jumpTo('member')">
       <i class="iconfont icon-weibiaoti2fuzhi12"></i>
       <p>会员</p>
     </li>
     <li>
       <i class="iconfont icon-gouwuche"  @click="jumpTo('cart')"></i>
       <p>购物车</p>
       <!-- 使用vuex接收值 -->
        <span class="badge">{{$store.state.totelnum}}</span>
     </li>
     <li>
       <i class="iconfont icon-xiazai17"></i>
       <p>搜索</p>
     </li>
   </ul>
   </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 02.通过点击将路由跳转的名字传递过来
    jumpTo (urlName) {
      // 03.跳转到对应的路由
      this.$router.push({ name: urlName })
    }
  },
  mounted () {
    // 在页面一加载时,触发vuex的函数,进行传值
    this.$store.commit('addtotelnum')
  }
}
</script>

<style lang="scss" scoped>
 #font{
      font-size: 16px;
      display: flex;
      position: fixed;
      bottom: 0;
      height: 50px;
      width: 100%;
      border-top: 1px solid #e7e7e7;
      background-color: #fff;
    ul{
       display: flex;
       width: 100%;
       position: relative;
      li{
      width: 25%;
      text-align: center;
    }
    }
  }
  .active {
  color: #26a2ff;
}
 .badge {
    position: absolute;
    top: 14%;
    left: 67%;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #e4393c;
    text-align: center;
    line-height: 14px;
    color: white;
  }
</style>

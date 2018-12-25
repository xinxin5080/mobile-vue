<template>
  <div>
    <div id="font">
   <ul>
     <li>
       <i class="iconfont icon-home"></i>
       <p>首页</p>
     </li>
     <li>
       <i class="iconfont icon-weibiaoti2fuzhi12"></i>
       <p>会员</p>
     </li>
     <li>
       <i class="iconfont icon-gouwuche"></i>
       <p>购物车</p>
     </li>
     <li>
       <i class="iconfont icon-xiazai17"></i>
       <p>搜索</p>
     </li>
   </ul>
   </div>
  </div>
</template>
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
</style>

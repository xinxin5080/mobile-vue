<template>
  <div class="home">
    <!-- 轮播图 -->
   <van-swipe :autoplay="5000" indicator-color="white">
      <van-swipe-item><img src="../assets/imgs/1.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/imgs/2.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/imgs/3.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/imgs/4.jpg" alt=""></van-swipe-item>
  </van-swipe>
   <div class="box">
     <ul>
       <li>
         <img src="../assets/imgs/menu01.png" alt="">
         <p>新闻资讯</p>
       </li>
       <li>
         <img src="../assets/imgs/menu02.png" alt="">
          <p>图片分享</p>
       </li>
       <li>
         <img src="../assets/imgs/menu03.png" alt="">
          <p>商品购买</p>
       </li>
       <li>
         <img src="../assets/imgs/menu04.png" alt="">
          <p>留言反馈</p>
       </li>
       <li>
         <img src="../assets/imgs/menu05.png" alt="">
          <p>视频专区</p>
       </li>
       <li>
         <img src="../assets/imgs/menu06.png" alt="">
          <p>反馈我们</p>
       </li>
     </ul>
   </div>
   <!-- 3.0使用组件 -->
  <font></font>
   <!--  -->
 </div>
</template>
<script>
// 1.0引进封装的组件
import font from '@/components/font'
export default {
// 2.0注入
  components: {
    font
  },
  data () {

  }
}
</script>

<style lang="scss" scoped>
.home {
.van-swipe{
  width: 100%;
  height: 210px;
  img{
    width: 100%;
    height: 100%;
  }
}
.box{
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 33.3%;
      margin-top: 10px;
      text-align: center;
      img{
        width: 60px;
        height: 60px;
      }
    }
  }
}
}
</style>

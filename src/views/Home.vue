<template>
  <div class="home">
    <!-- 轮播图 -->
   <van-swipe :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(arr, index) in imgList " :key="index"><img :src="arr" alt=""></van-swipe-item>
  </van-swipe>
  <!-- 图标 -->
   <div class="box">
     <ul>
       <li v-for="(item, index) in navList" :key="index" @click="jumpTo(item.urlName)">
         <img :src="item.imgurl" alt="">
         <p>{{item.title}}</p>
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
    return {
      imgList: [
        require('../assets/imgs/1.jpg'),
        require('../assets/imgs/2.jpg'),
        require('../assets/imgs/3.jpg'),
        require('../assets/imgs/4.jpg')
      ],
      // src图片的渲染,数据要用模型 require,不然会被当成字符串
      navList: [
        { imgurl: require('../assets/imgs/menu01.png'), title: '新闻资讯', urlName: 'newslist' },
        { imgurl: require('../assets/imgs/menu02.png'), title: '图片分享', urlName: 'instagram' },
        { imgurl: require('../assets/imgs/menu03.png'), title: '商品购买', urlName: 'goodslist' },
        { imgurl: require('../assets/imgs/menu04.png'), title: '留言反馈', urlName: '' },
        { imgurl: require('../assets/imgs/menu05.png'), title: '视频专区', urlName: '' },
        { imgurl: require('../assets/imgs/menu06.png'), title: '反馈我们', urlName: '' }
      ]
    }
  },
  methods: {
    // 通过点击将路由的name传递过来,进行对应的路由跳转
    jumpTo (urlName) {
      this.$router.push({ name: urlName })
    }
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

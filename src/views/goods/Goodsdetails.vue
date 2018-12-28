<template>
  <div>
    <headbtn outtitle="商品详情" class="goods-detail"></headbtn>
    <van-swipe :autoplay="3000" indicator-color="white"  class="swiperbox">
        <van-swipe-item v-for="(item , index) in img" :key="index"><img :src="item.src" alt=""></van-swipe-item>
    </van-swipe>
    <div>
      <h4 class="goods-title">{{goodslist.title}}</h4>
      <p class="goods-price">
        <span class="market-price">{{goodslist.market_price}}</span>
        <span class="sell-price">{{goodslist.sell_price}}</span>
      </p>
    </div>
    <div class="goods-info">
      <h4 class="goods-desc">商品参数</h4>
      <p>{{goodslist.goods_no}}</p>
      <p>{{goodslist.stock_quantity}}</p>
      <p>{{goodslist.add_time | filtertime}}</p>
    </div>
    <van-button type="primary" size="large" @click="jumpto('goodstext')">图文介绍</van-button>
    <van-button type="danger" size="large" @click="jumpto('goodscomment')">商品评论</van-button>
    <div class="goods-footer">
      <div class="goods-footer-item contact"><span class="iconfont icon-kefu"></span><span>联系客服</span></div>
      <div class="goods-footer-item cart">
        <span class="iconfont icon-gouwuche"></span>
        <span>购物车</span>
        <span class="badge">4</span>
      </div>
      <div class="goods-footer-item add"  @click="shopbtn"><span>加入购物车</span></div>
      <div class="goods-footer-item buy"  @click="jumptocart"><span>立即购买</span></div>
    </div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { goodsdetails, imagedetails, goodscart } from '@/api'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      id: this.$route.params.id,
      goodslist: {},
      img: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      imagedetails(this.id)
        .then(res => {
          // console.log(res)
          this.img = res.message
        })
      goodsdetails(this.id)
        .then(res => {
          // console.log(res)
          this.goodslist = res.message[0]
        })
    },
    // 携带id重定向到图文介绍
    jumpto (urlname) {
      this.$router.push({ name: urlname, params: { id: this.id } })
    },
    // 立即购买
    jumptocart () {
      this.$router.push({ name: 'cart' })
    },
    // 加入购物车
    shopbtn () {
      // 1.0 判断购物里有没有当前的东西,假设将东西存储在mycart中
      // 1.1获取mycart
      // 将之前存储的JSON字符串先转成JSON对象再进行操作
      // []加引号用了JSON.parse
      let mycart = JSON.parse(localStorage.getItem('mycart') || '[]')
      // 1.2判断商品存不存在,可直接查找mycart的数组里有没有对应的id
      // mycart=[{id:87,num:...}]这种数据
      // 使用findIndex方法来判断,找不找返回-1,找到返回当前的索引index
      // item为每一项=>里面的id是否等于商品的id
      // this.id是字符串转成数字
      let index = mycart.findIndex(item => item.id === parseInt(this.id))
      console.log(index)
      // 1.3使用返回来的数据进行判断 -1表示没找到
      if (index === -1) {
        goodscart(this.id)
        // 1.5从后台获取图片
          .then(res => {
            // 1.4没有的话创建mycart数组,购物车页面需要的东西
            let tempObj = {
              select: true, // 默认选中
              img: res.message[0].thumb_path, // 图片需要发请求
              title: this.goodslist.title, // 标题
              price: this.goodslist.sell_price, // 价格
              num: 1, // 数量
              id: this.goodslist.id
            }
            // 1.6push进数组中
            mycart.push(tempObj)
            // 1.7存储到本地
            // 存储前先用JSON.stringify()方法将json对象转换成字符串形式
            localStorage.setItem('mycart', JSON.stringify(mycart))
            // 异步请求
            this.$router.push({ name: 'cart' })
          })
      } else {
        // 1.8已经有了商品,将num+1
        mycart[index].num += 1
        // 重新设置进去
        localStorage.setItem('mycart', JSON.stringify(mycart))
        this.$router.push({ name: 'cart' })
      }
    }
  },
  beforeDestroy () {

  }
}
</script>
<style lang="scss" scoped>
.goods-detail {
  margin-bottom: 45px;
  padding: 0 10px;
}
.swiperbox {
  height: 350px;
  img {
    width: 90%;
  }
}

.goods-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
.goods-price {
  font-size: 14px;
  .market-price {
    text-decoration: line-through;
  }
  .sell-price {
    color: #e4393c;
  }
}

.goods-info {
  font-size: 14px;
   .goods-desc {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
}

.goods-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  .goods-footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact, .cart {
    width: 40%;
    font-size: 12px;
    position: relative;
  }
  .badge {
    position: absolute;
    top: 3%;
    left: 50%;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #e4393c;
    text-align: center;
    line-height: 14px;
    color: white;
  }
  .add, .buy {
    width: 60%;
    color: white;
    &>span {
      font-size: 20px;
    }
  }
  .add {
    background-color: #ff9600;
  }
  .buy {
    background-color: #e4393c;
  }
}
</style>

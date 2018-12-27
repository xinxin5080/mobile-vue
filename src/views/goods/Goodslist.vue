<template>
  <div>
      <headbtn outtitle="商品列表"></headbtn>
       <van-list
        v-model="loading"
        :offset="300"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <ul class="goods-ul">
      <!-- router-link有个tag属性，用于指定router-link渲染成的标签 -->
        <router-link class="goods-li" to="/" tag="li" v-for="item in goodsdata" :key="item.id">
          <div class="goods-container">
            <img :src="item.img_url" alt="">
            <h4>{{item.title}}</h4>
            <div class="goods-info">
              <div class="price-info">
                <span class="price-new">${{item.sell_price}}</span>
                <span class="price-old">${{item.market_price}}</span>
              </div>
              <div class="sell-info">
                <span class="sell-status">剩余{{item.stock_quantity}}件</span>
                <span class="sell-leftcount">{{item.zhaiyao}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </van-list>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { goodsimg } from '@/api'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      page: 1,
      goodsdata: [],
      loading: false, // 加载中 是否出于加载状态.加载过程不(false)触发事件
      finished: false, //  没有更多了 是否加载完成
      new: '',
      out: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.out = this.goodsdata
      goodsimg(this.page)
        .then(res => {
          this.goodsdata = res.message
          this.new = res.message
        })
    },
    //
    onLoad () {
      setTimeout(() => {
        if (this.goodsdata.length < 10) {
          this.loading = true// 不触发
          this.finished = true
        } else {
          this.page += 1
          this.new = ''
        }
        // 加载状态结束
        this.init()
        this.loading = false
        this.finished = true
        setTimeout(() => {
          this.goodsdata = [...(this.out), ...(this.new)]
        }, 1)
      }, 500)
    }
  }

}
</script>

<style lang="scss" scoped>
.goods-list {
  background-color: #f4f4f4;
  .goods-li {
    .goods-container {
      width: 100%;
      background-color: #fff;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content:space-between;
    }
    .price-info {
      display: flex;
      justify-content: space-between;
    }

  }

  .goods-li:nth-child(2n+1) {
    padding-right: 5px;
  }
  .goods-li:nth-child(2n) {
    padding-left: 5px;
  }
}
  h4 {
    font-size: 12px;
    font-weight: bold;
    height: 32px;
    // 多行文本超出省略号
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goods-li {
    width: 45%;
    box-sizing: border-box;
    padding-top: 10px;
    display: flex;
  }
   ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 10px;
     margin: 50px 0 0 0;
     justify-content: space-between;
     padding: 0 10px;
     overflow:scroll;
  }
  .price-new {
        color: red;
      }
  .price-old {
  text-decoration: line-through;
}
.sell-info {
      display: flex;
      justify-content: space-between;
    }
</style>

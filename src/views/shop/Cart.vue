<template>
  <div>
      <headbtn outtitle="购物车" class="goods-detail"></headbtn>
    <div class="cart">
    <div class="empty-cart" v-if="this.mycart.length===0">
      <img src="" alt="" class="empty-cart-img">
      <div class="empty-cart-text">购物车还是空的</div>
      <div class="btn">去逛逛</div>
    </div>
    <div class="cart-container" v-else v-for="(item,index) in mycart" :key="index">
      <!-- 类控制器 icon-checkbox-marked-circ(选中)
      icon-checkbox-blank-circle-outline(未选中) -->
      <!-- 通过select的状态来判断 -->
      <span class="iconfont toogle" :class="item.select===true ?'icon-checkbox-marked-circ': 'icon-checkbox-blank-circle-outline'" @click="toogle(index)"></span>
      <div class="item-detail">
        <img :src="item.img" alt="">
        <div class="item-info">
          <h3>{{item.title}}</h3>
          <div class="pay">
            <div class="pay-price">￥{{item.price}}</div>
            <div class="edit-quantity">
              <!-- 减 -->
              <p class="operate-btn iconfont icon-minus" @click="subtract(index)"></p>
              <p class="btn-input">{{item.num}}</p>
              <!-- 加 -->
              <p class="operate-btn iconfont icon-plus" @click="addnum(index)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-footer-left"><span class="iconfont toogle" :class="checkall ?'icon-checkbox-marked-circ': 'icon-checkbox-blank-circle-outline'" @click="hesdleall"></span><span>全选</span></div>
      <div class="cart-footer-center"><span>合计：</span><span class="total-price">￥{{totaPrice}}</span></div>
      <div class="cart-footer-right"><span class="goto-pay">结算({{nums}})</span></div>
    </div>
     </div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      mycart: [] // 本地存储
    }
  },
  mounted () {
    // 1.0从本地存储中获取数据
    this.mycart = JSON.parse(localStorage.getItem('mycart') || '[]')
    // 在页面一加载时,触发vuex的函数,进行传值
    this.$store.commit('addtotelnum')
  },
  methods: {
    // 通过点击切换选中状态
    toogle (index) {
    // 找到当前的项进行切换
      this.mycart[index].select = !this.mycart[index].select
    },
    // 点击全选
    hesdleall () {
    // 如果计算属性 checkall 为true，就把所有的数据项的selectState变为false
    // 如果计算属性 checkall 为false，就把所有的数据项的selectState变为true
      let all = this.checkall
      // 遍历,将所有的状态赋值切换
      this.mycart.map(item => {
        item.select = !all
      })
    },
    // 点击+
    addnum (index) {
      this.mycart[index].num += 1
      // 重新设置进去
      console.log(this.mycart[index].num)
    },
    // 点击-
    subtract (index) {
      // 小于1
      if (this.mycart[index].num < 1) {
        // 将当前这一项删除
        this.mycart.splice(index, 1)
      } else {
        this.mycart[index].num -= 1
      }
    }
  },
  // 离开页面前将数据保存
  beforeDestroy () {
    localStorage.setItem('mycart', JSON.stringify(this.mycart))
  },
  computed: {
    // 计算总价
    totaPrice () {
      // 先定义为0
      let price = 0
      // 遍历本地存储中
      this.mycart.map(item => {
        // 找出选中的状态
        if (item.select) {
          // 价格*数量
          price += item.price * item.num
        }
      })
      return price
    },
    // 计算数量
    nums () {
      let num = 0
      this.mycart.map(item => {
        num += item.num
      })
      return num
    },
    // 全选状态
    checkall () {
      let all = true
      // 判断当前的状态是否去不选中,有一项没选中就返回false
      this.mycart.map(item => {
        if (!item.select) {
          all = false
        }
      })
      return all
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  height: 320px;
  margin-top: 45px;
  font-size: 14px;
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    .empty-cart-img {
      height: 90px;
      width: 90px;
    }
    .empty-cart-text {
      font-size: 20px;
      color: #999;
      padding: 15px 0;
    }
    .btn {
      font-size: 20px;
      padding: 15px 55px;
      text-align: center;
      margin: 0 auto;
      border-radius: 10px;
      background: #ed601b;
      color: #fff;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 8px 10px;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    .toogle {
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 20px;
    }
    .icon-checkbox-marked-circ {
      color: #ff5500;
    }
    .icon-checkbox-blank-circle-outline {
      color: #666666;
    }
  }
  .item-detail {
    display: flex;
    flex: 1;
    img {
      margin: 2px 0 2px 5px;
      width: 90px;
      height: 90px;
    }
    .item-info {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h3 {
        font-size: 16px;
        font-weight: 400;
      }
      .pay {
        display: flex;
        justify-content: space-between;
        .pay-price {
          color: #ff5500;
          font-weight: bold;
          line-height: 30px;
        }
        .edit-quantity {
          display: flex;
          height: 30px;
          line-height: 30px;
          .operate-btn {
            padding: 0 10px;
            font-size: 20px;
            color: #bababa;
          }
          .btn-minus {
            font-size: 14px;
          }
        }
      }
    }
  }
  .cart-footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    width: 100%;
    border-top: 1px solid #e7e7e7;
    background-color: #fff;
    .cart-footer-left {
      display: flex;
      justify-content: cneter;
      align-items: center;
      span {
        display: block;
        height: 50px;
        padding: 0 5px;
      }
    }
    .cart-footer-center {
      .total-price {
        color: #ff5500;
        font-weight: bold;
      }
    }
    .cart-footer-right {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      background-color: #ff5500;
      .goto-pay {
        color: #fff;
      }
    }
    .icon-checkbox-marked-circ {
      color: #ff5500;
    }
    .icon-checkbox-blank-circle-outline {
      color: #666666;
    }
  }
}
</style>

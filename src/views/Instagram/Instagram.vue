<template>
  <div>
    <headbtn outtitle="图文咨询"></headbtn>
    <div class="img-list">
      <div class="cate">
        <ul id="cateul">
          <li><span>全部</span></li>
          <li v-for="item in imgList" :key="item.id" @click="headedtitle(item.id)">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <div class="img-list-box">
        <ul>
          <li v-for="item2 in imgs" :key="item2.id">
            <!-- 使用模板,要加:号绑定 -->
            <router-link :to='`/imgDetail/${item2.id}`'><img :src="item2.img_url" alt="item2.title"></router-link>
            <p><span class="title">{{item2.zhaiyao}}</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { imgtitle, imgdata } from '@/api'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      imgList: [],
      id: '',
      imgs: []
    }
  },
  created () {
    imgtitle()
      .then(res => {
        this.imgList = res.message
        // 计算出宽度,设置css
        let w = (res.message.length + 1) * 60
        document.getElementById('cateul').style.width = w + 'px'
      })
    this.id = 0
    this.init()
  },
  methods: {
    headedtitle (id) {
      this.id = id
      console.log(id)
      this.init()
    },
    init () {
      imgdata(this.id)
        .then(res => {
          console.log(res)
          this.imgs = res.message
        })
    }

  }
}
</script>
<style lang="scss">
  img {
    width: 100%;
    height: 100%;
  }
  li > div > div{
    display: flex;
    flex-wrap: wrap;
    &>figure{
      width: 33.33%;
    }
  }
</style>
<style lang="scss" scoped>
  .img-list {
    margin-bottom: 55px;
    margin-top: 40px;
  }
  .cate {
    max-width: 100%;
    margin: 0;
    overflow-x:auto;
    overflow-y: hidden;
    font-size: 14px;
    ul {
      padding-left: 10px;
      margin: 5px 0;
      li {
        list-style: none;
        display: inline-block;
        padding: 0 0 0 5px;
        span {
          color:#0094ff;
        }
      }
    }
  }
  .img-list-box {
    ul {
      padding: 0;
      li {
        list-style: none;
        position: relative;
      }
    }
    p {
      font-size: 14px;
      color: #fff;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0,0,0,0.4);
      .title {
        font-weight: bold;
      }
    }
    img {
      width: 100%;
    }
  }

  image[lazy=loading] {
    width: 100%;
    margin: auto;
  }
  //
  .img-detail {
  margin-top: 40px;
  margin-bottom: 55px;

  .img-title {
    font-size: 16px;
    font-weight: bold;
  }
  .img-info {
    display: flex;
    justify-content: space-around;
    color: #26a2ff;
    font-size: 14px;
  }
  .content {
    font-size: 14px;
  }
}
</style>

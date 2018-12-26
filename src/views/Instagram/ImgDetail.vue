<template>
  <div>
  <headbtn outtitle="图文详情"></headbtn>
  <div class="img-detail">
    <div>
      <h3 class="img-title">{{imagetxetList.title}}</h3>
      <p class="img-info">
        <span class="time">{{imagetxetList.add_time}}</span>
        <span>{{imagetxetList.click}}次点击</span>
        <span>分类xxx</span>
      </p>
    </div>
    <ul>
      <li>
       <vue-preview :slides="imagedetailsList" @close="handleClose"></vue-preview>
      </li>
    </ul>
    <div class="content" v-html="imagetxetList.content"></div>
    <commentbtn :id="id"></commentbtn>
  </div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { imagedetails, imagetxet } from '@/api'
import commentbtn from '@/components/Comment'
export default {
  components: {
    headbtn,
    commentbtn
  },
  data () {
    return {
      id: this.$route.params.id,
      imagedetailsList: [], // 图片
      imagetxetList: {}// 图片信息
    }
  },
  methods: {
    init () {
      // 小图片
      imagedetails(this.id)
        .then(res => {
          // 做数据拼接,在数组(res.message)的每一项拼接msrc,w,h
          res.message.map(item => {
            item.msrc = item.src
            item.w = 600
            item.h = 400
          })
          console.log(res)
          this.imagedetailsList = res.message
        })
    },
    init2 () {
      // 小图描述
      imagetxet(this.id)
        .then(res => {
          this.imagetxetList = res.message[0]
        })
    },
    handleClose () {
      console.log('close event')
    }
  },
  created () {
    this.init()
    this.init2()
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
.img-detail {
  margin-top: 50px;
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

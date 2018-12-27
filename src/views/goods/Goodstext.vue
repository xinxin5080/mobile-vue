<template>
  <div>
      <headbtn outtitle="图文介绍"></headbtn>
      <div>
        <h3 class="desc-title">{{texes.title}}11111</h3>
        <div class="desc-content" v-html="texes.content"></div>
      </div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { goodstext } from '@/api'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      id: this.$route.params.id,
      texes: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      goodstext(this.id)
        .then(res => {
          this.texes = res.message[0]
        })
    }
  }
}
</script>
<style lang="scss" scoped>
img {
    display: block;
}

.goods-desc {
  margin-top: 50px;
  h3 {
    font-weight: bold;
    color: #26a2ff;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .desc-content {
    font-size: 14px;
  }
}
h3{
 margin-top: 50px;
 font-weight: bold;
    color: #26a2ff;
    font-size: 16px;
    margin-bottom: 5px;
}
</style>

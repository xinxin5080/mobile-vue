<template>
  <div>
    <headbtn outtitle="商品评论" class="goods-detail"></headbtn>
    <commentbtn :id="id" class="aa"></commentbtn>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import commentbtn from '@/components/Comment'
export default {
  components: {
    headbtn,
    commentbtn
  },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style lang="scss" scoped>
.aa{
  margin-top: 50px;
}
</style>

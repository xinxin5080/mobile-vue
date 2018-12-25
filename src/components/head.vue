<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      fixed
      :title="outtitle"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
export default {
  // 父子传值
  props: ['outtitle'],
  //
  methods: {
    onClickLeft () {
      // 点击返回上一级
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.van-nav-bar{
  background-color:#25a3fe;
  color: #fff;
}
.van-icon{
  color: #fff;
}

</style>

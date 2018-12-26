<template>
  <div>
    <headbtn outtitle="新闻详情"></headbtn>
    <!--文章 -->
    <div class="news-detail">
      <h1 class="news-title">{{detailsList.title}}</h1>
      <p class="news-info">
        <span>{{detailsList.add_time}}</span>
        <span>{{detailsList.click}}</span>
        <span>xxxx</span>
      </p>
    </div>
    <div class="news-content" v-html="detailsList.content"></div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { newsDetails } from '@/api/index'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      id: this.$route.params.id, // 定义从url上获取的id
      detailsList: []
    }
  },
  methods: {

  },
  mounted () {
    // 发送请求,携带id(从后台传递过来)
    newsDetails(this.id)
      .then(res => {
        console.log(res)
        this.detailsList = res.message[0]
      })
  }
}
</script>
<style lang="scss" scoped>
.news-detail {
  padding: 50px 0 0 0;
  .news-title {
    font-size: 16px;
    font-weight: bold;
  }
  .news-info {
    font-size: 12px;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
  }
  .news-content {
    font-size: 12px;
  }
}
</style>

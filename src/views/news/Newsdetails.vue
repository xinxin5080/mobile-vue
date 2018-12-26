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
    <commentbtn :id="id"></commentbtn>
        <!-- 评论 -->
    <!-- <div class="comment">
      <div class="submitbox">
        <h3>提交评论</h3>
        <div>
          <van-cell-group>
              <van-field
                v-model="input"
                type="textarea"
                placeholder="请输入留言"
                rows="1"
                :autosize="autosize"
              />
            </van-cell-group>
          <van-button plain type="primary" size="mini" @click="fabiao">发表</van-button>
        </div>
      </div>
      <div class="commentbox">
        <h3 class="line"></h3>
        <ul>
          <li v-for="(item,index) in commentdata" :key="index">
            <h4 class="comment-content">{{item.content}}</h4>
            <p>
              <span class="comment-time">{{item.user_name}}</span>
              <span class="comment-user">{{item.add_time}}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="button-group">
       <van-button type="primary" @click="jiazai" v-if="headfo">加载更多</van-button>
        <van-button type="default" disabled v-else>没有更多了</van-button>
      </div>
    </div> -->
  </div>
</template>
<script>
import headbtn from '@/components/head'
import commentbtn from '@/components/Comment'
import { newsDetails } from '@/api/index'

export default {
  components: {
    headbtn,
    commentbtn
  },
  data () {
    return {
      id: this.$route.params.id, // 定义从url上获取的id
      detailsList: []
    }
  },
  methods: {

  },
  created () {
    // 发送请求,携带id(从后台传递过来)
    newsDetails(this.id)
      .then(res => {
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

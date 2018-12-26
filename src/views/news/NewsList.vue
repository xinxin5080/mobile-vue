<template>
  <div>
    <!-- 头部,使用父子传值 -->
    <headbtn outtitle="新闻资讯"></headbtn>
    <!-- 列表 -->
    <div class="news-list">
      <ul>
        <li v-for="item in newsdata" :key="item.id" @click="hit(item.id)">
          <div class="news-item">
            <img :src="item.img_url" alt="">
            <div class="content">
              <p class="content-title">{{item.title}}</p>
              <p class="content-info"><span class="content-time">{{item.add_time}}</span><span class="content-click">{{item.click}}</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headbtn from '@/components/head'
import { newsList } from '@/api/index'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      newsdata: []
    }
  },
  methods: {
    hit (id) {
      this.$router.push({ name: 'newsdetails', params: { id } })
    }
  },
  created () {
    newsList()
      .then(res => {
        // console.log(res)
        this.newsdata = res.message
      })
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  ul {
    padding: 40px 0 0 0;
    li {
      padding: 5px;
    }
  }
  .news-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100px;
      height: 80px;
      margin-right: 10px;
      flex: 1;
    }
    .content {
      flex: 2;
      width: 250px;
      .content-title {
        font-size: 14px;
        font-weight: bold;
      }
      .content-info {
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
        font-size: 12px;
        line-height: 35px;
      }
    }
  }
}
</style>

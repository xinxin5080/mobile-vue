<template>
  <div>
        <!-- 评论 -->
    <div class="comment">
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
    </div>
  </div>
</template>
<script>
import { comment, publish } from '@/api/index'
import { Toast } from 'vant'
// 引进qs转格式
import qs from 'qs'
export default {
  data () {
    return {
      autosize: { minHeight: 140 },
      input: '',
      commentdata: [],
      pageindex: 1, // 当前的页码
      headfo: true
    }
  },
  props: ['id'], // 定义一个坑，专门用于接收父组件传递过来的id
  methods: {
    initComment () {
      // 在没发送请求时,先把旧数据保存起来
      let outcomment = this.commentdata
      // 评论列表
      comment(parseInt(this.id), this.pageindex)
        .then(res => {
          this.commentdata = res.message
          // 判断
          if (this.commentdata.length < 10) {
            this.headfo = false
          }
          // 新数据
          let newcomment = res.message
          // 将新旧数据合并
          this.commentdata = [...outcomment, ...newcomment]
        })
    },
    // 点击加载
    jiazai () {
      // 页码加+1
      this.pageindex += 1
      this.initComment()
    },
    // 发表
    fabiao () {
      // 转成content=11 的格式
      let str = { content: this.input }
      let strdata = qs.stringify(str)
      console.log(this.input.trim())
      // 先进行效验,判断是否为空
      if (this.input.trim()) {
        publish(this.id, strdata)
          .then(res => {
            if (res.status === 200) {
              this.pageindex = 1
              this.commentdata = []
              this.initComment()
              this.input = ''
              Toast(res.data.message)
            } else {
              Toast(res.data.message)
            }
          })
      } else {
        Toast('内容不可以为空')
      }
    }
  },
  created () {
    this.initComment()
  }
}
</script>
<style lang="scss" scoped>
h3{
  margin-top: 10px;
}
.button-group{
.van-button{
  width: 100%;
  margin-top: 10px;
}
}
.inputbox {
  border: 1px solid #999;
}
.comment h3 {
  font-weight: bold;
  margin: 10px 0;
  font-size: 14px;
}
.line {
  border-top: 1px solid #999;
  padding-top: 10px;
}
.commentbox{
  li:not(:last-child) {
    border-bottom: 1px solid #999;
    margin: 5px 0;
  }
  p {
    font-size: 14px;
  }
  .comment-content {
    color: #999;
    font-size: 14px;
  }
}
.comment-user, .comment-time {
  font-size: 12px;
  color: #26a2ff;
}
</style>

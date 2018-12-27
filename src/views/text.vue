Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @xinxin5080 Sign out
243
7,033 1,491 youzan/vant
 Code  Issues 25  Pull requests 1  Projects 1  Wiki  Insights
vant/packages/list/demo/index.vue
c8967fc  on 24 Nov
@chenjiahan chenjiahan [new feature] List: add finished-text prop (#2131)

92 lines (83 sloc)  1.74 KB
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <p class="page-desc">{{ $t('text') }}</p>
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="$t('finishedText')"
          @load="onLoad"
        >
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item + ''"
          />
        </van-list>
      </van-pull-refresh>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '当即将滚动到元素底部时，会自动加载更多',
      finishedText: '没有更多了'
    },
    'en-US': {
      text: 'This list will load items will scroll to bottom.',
      finishedText: 'Finished'
    }
  },
  data () {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1
          this.list.push(text < 10 ? '0' + text : text)
        }
        this.loading = false
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    onRefresh () {
      setTimeout(() => {
        this.list = []
        this.finished = false
        this.refreshing = false
        window.scrollTo(0, 10)
      }, 1000)
    }
  }
}
</script>

<style lang="less">
@import '../../style/var';
.demo-list {
  .van-cell {
    text-align: center;
  }
  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: @gray-darker;
  }
}
</style>
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.

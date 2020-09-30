<template>
  <div class="app">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="PullRefresh" />
    <sun-tabs>
      <div class="sun-tab-item" @click="currentIndex=0">基础用法</div>
      <div class="sun-tab-item" @click="currentIndex=1">成功提示</div>
      <div class="sun-tab-item" @click="currentIndex=2">自定义提示</div>
    </sun-tabs>

    <div class="content" v-if="currentIndex===0">
      <sun-pull-refresh v-model="isLoading" @refresh="handleRefresh1">
        <p class="refresh-time">刷新次数{{count}}</p>
      </sun-pull-refresh>
    </div>
    <div class="content" v-if="currentIndex===1">
      <sun-pull-refresh v-model="isLoading" @refresh="handleRefresh" success-text="刷新成功啦">
        <p class="refresh-time">刷新次数{{count}}</p>
      </sun-pull-refresh>
    </div>
    <div class="content" v-if="currentIndex===2">
      <sun-pull-refresh v-model="isLoading" @refresh="handleRefresh">
        <p class="refresh-time">刷新次数{{count}}</p>
        <template #pulling>
          我就是下拉时候的内容
        </template>
        <template #loosing>
          <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
        </template>
        <template #loading>
          <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
        </template>
      </sun-pull-refresh>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        count: 0,
        currentIndex: 0
      }
    },
    methods: {
      handleRefresh() {
        this.count++
      },
      handleRefresh1() {
        this.$toast('刷新完啦...')
        this.count++
      },
    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .app {
    padding-top: 49px;
  }

  .content {
    box-sizing: border-box;
    width: 100%;
    height: 90vh;
    padding: 16px;
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

</style>

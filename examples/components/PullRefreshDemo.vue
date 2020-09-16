<template>
  <div class="app">
    <header>首页</header>
    <sun-pull-refresh v-model="isLoading" head-height="100" success-text="啦啦刷新成功啦..." @refresh="handleRefresh">
      <div class="content">内容</div>
      <template #success>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" style="width: 200px;height: 50px;" alt="">
      </template>
      <template #pulling>
        我就是下拉时候的内容
      </template>
      <template #loosing>
        我就是释放时候的内容
      </template>
      <template #loading>
        我就是加载时候的内容...
      </template>

    </sun-pull-refresh>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      handleRefresh() {
        console.log('刷新完啦。。。')
      },

    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  header {
    width: 100%;
    height: 42px;
    background-color: deeppink;
    text-align: center;
    line-height: 42px;
    font-size: 26px;
    color: #fff;
  }

  .content {
    width: 100%;
    height: 400px;
    background-color: yellowgreen;
    text-align: center;
    line-height: 400px;
    font-size: 30px;
    color: #fff;
  }

</style>

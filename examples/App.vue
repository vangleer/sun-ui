<template>
  <div class="app">
    <header>首页</header>
    <sun-pull-refresh>
      <div class="content">内容</div>
    </sun-pull-refresh>
  </div>
</template>

<script>
  export default {

  }

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

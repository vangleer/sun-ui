<template>
  <div class="app">
    <sun-nav-bar title="我的" left-text="返回" border right-text="搜索" @left-click="handleLeftClick">
      <template #left>
        左左
      </template>
      <template #title>
        标标
      </template>
      <template #right>
        优优
      </template>
    </sun-nav-bar>
    <div class="content"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleLeftClick() {
        console.log('点击了左边')
      }
    }
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 100%;
    height: 2000px;
  }

</style>

<template>
  <div class="app">
    <!-- 基础用法 -->
    <sun-pagination  v-model="currentPage" :total-items="24" :items-per-page="5"></sun-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage:2
    }
  }
}
</script>

<style lang="less">
.app {
  width: 100vw;
  height: 100vh;
  padding: 50px 20px;
  background-color: #eee;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
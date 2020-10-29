<template>
  <div class="app">
    <!-- 基础用法 -->
    <sun-pagination  v-model="currentPage" :total-items="44" :items-per-page="5"></sun-pagination>

    <!-- 简单用法 -->
    <sun-pagination v-model="currentPage2" :page-count="12" mode="simple" />

    <!-- 显示省略号 -->
    <sun-pagination
      v-model="currentPage3"
      :total-items="125"
      :show-page-size="3"
      force-ellipses
      @change="handleChange"
    />

    <!-- 自定义按钮 -->
    <sun-pagination v-model="currentPage" :total-items="50" :show-page-size="5">
      <template #prev-text>
        <sun-icon name="arrow-left" />
      </template>
      <template #next-text>
        <sun-icon name="arrow-right" />
      </template>
       <template #page="scope">{{ scope.text }}</template>
    </sun-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage:2,
      currentPage2:1,
      currentPage3:1,
    }
  },
  methods:{
    handleChange(page) {
      console.log(page)
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
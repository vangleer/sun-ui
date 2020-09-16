<template>
  <div class="app">
    <sun-tabbar v-model="current" z-index="12" active-color="skyblue" @change="handleChange">
      <sun-tabbar-item icon="chu" dot>首页</sun-tabbar-item>
      <sun-tabbar-item icon="cheng">分类</sun-tabbar-item>
      <sun-tabbar-item icon="cheng">分类</sun-tabbar-item>
      <sun-tabbar-item icon="up">我的</sun-tabbar-item>
      <sun-tabbar-item icon="up">我的</sun-tabbar-item>
      <sun-tabbar-item icon="jiajian02" badge="啦" url="http://www.baidu.com">百度</sun-tabbar-item>
    </sun-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 1
      }
    },
    methods: {
      handleChange(index) {
        console.log(index)
      }
    }
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

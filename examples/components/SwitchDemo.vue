<template>
  <div class="app">
    <!-- 基础用法 -->
    <sun-switch v-model="checked" size="60"></sun-switch>
    <!-- 大小 -->
    <sun-switch size="10" v-model="checked"></sun-switch>
    <!-- 是否禁用 -->
    <sun-switch disabled v-model="checked"></sun-switch>
    <!-- 自定义颜色 -->
    <sun-switch size="10" active-color="green" inactive-color="red" v-model="checked"></sun-switch>
    <!-- 事件 -->
    <sun-switch @click="handleClick" @change="handleChange" v-model="checked"></sun-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
      handleClick(e) {
        console.log('点我了', e)
      },
    },
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

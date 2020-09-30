<template>
  <div class="sun-demo-nav-bar">
    <sun-nav-bar title="NavBar" left-arrow />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-tabbar v-model="active">
        <sun-tabbar-item icon="home">标签</sun-tabbar-item>
        <sun-tabbar-item icon="category">标签</sun-tabbar-item>
        <sun-tabbar-item icon="car">标签</sun-tabbar-item>
        <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
      </sun-tabbar>
    </div>

    <!-- 徽标提示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-tabbar v-model="active">
        <sun-tabbar-item icon="home">标签</sun-tabbar-item>
        <sun-tabbar-item icon="category" dot>标签</sun-tabbar-item>
        <sun-tabbar-item icon="car" badge="20">标签</sun-tabbar-item>
        <sun-tabbar-item icon="friends" badge="5">标签</sun-tabbar-item>
      </sun-tabbar>
    </div>

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-tabbar v-model="active">
        <sun-tabbar-item icon="home">标签</sun-tabbar-item>
        <sun-tabbar-item icon="category">标签</sun-tabbar-item>
        <sun-tabbar-item icon="car">标签</sun-tabbar-item>
        <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
      </sun-tabbar>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from '../packages';
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      },
    },
    created() {}
  }

</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }

  .sun-demo-nav-bar {
    padding-top: 49px;
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;

    .sun-tabbar {
      position: relative;
      background-color: #fff;
      border: 0;
    }

    .sun-demo-nav-title {
      padding: 16px 16px 12px;
    }

    .sun-demo-nav-box {
      position: relative;
      height: 80px;

      .sun-nav-bar {
        position: absolute;
        background-color: #fff;
        color: #1989fa;

        .sun-nav-bar-left,
        .sun-nav-bar-right {
          font-size: 14px;
        }
      }
    }
  }

</style>

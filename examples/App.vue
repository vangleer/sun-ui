<template>
  <div class="sun-demo-nav-bar">
    <sun-nav-bar title="NavBar" left-arrow />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <div class="sun-demo-nav-box">
        <sun-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
          @click-right="onClickRight" />
      </div>
    </div>

    <!-- 使用插槽 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">使用插槽</h2>
      <div class="sun-demo-nav-box">
        <sun-nav-bar title="标题" left-text="返回" left-arrow>
          <template #right>
            <sun-icon name="plus" size="18" />
          </template>
        </sun-nav-bar>
      </div>
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

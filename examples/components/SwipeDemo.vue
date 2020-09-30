<template>
  <div class="sun-demo-swipe">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Swipe" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-swipe class="my-swipe" :autoplay="3000">
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">监听 change 事件</h2>
      <sun-swipe class="my-swipe" @change="onChange">
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">纵向滚动</h2>
      <sun-swipe class="my-swipe" vertical>
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义指示器</h2>
      <sun-swipe class="my-swipe" @change="onChange2">
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>

        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/4
          </div>
        </template>
      </sun-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        current: 0,
      }
    },
    methods: {
      onChange(index) {
        this.$toast('当前索引是: ' + index)
      },
      onChange2(index) {
        this.current = index;
      },
    },
    created() {}
  }

</script>

<style lang="less">
  .sun-demo-swipe {
    margin-top: 49px;
    padding-bottom: 20px;
    background-color: #f8f8f8;

    .sun-demo-block {
      .sun-demo-nav-title {
        margin: 0;
        padding: 20px 16px 12px;
      }

    }

    .my-swipe .sun-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 200px;
      text-align: center;
      background-color: #2bde9d;
    }

    .my-swipe .sun-swipe-item:nth-child(odd) {
      background-color: #7fe2be;
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
    }
  }

</style>

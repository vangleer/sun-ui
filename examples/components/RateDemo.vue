<template>
  <div class="sun-demo-rate">
    <sun-nav-bar title="Rate" left-arrow @left-click="$router.back()" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-rate v-model="value" />
    </div>

    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义图标</h2>
      <sun-rate v-model="value2" icon="like" void-icon="like-o" />
    </div>

    <!-- 自定义样式 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义样式</h2>
      <sun-rate v-model="value3" :size="25" color="#ffd21e" void-icon="star-f" void-color="#eee" />
    </div>

    <!-- 自定义数量 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义数量</h2>
      <sun-rate v-model="value4" :count="6" />
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">禁用状态</h2>
      <sun-rate v-model="value5" disabled />
    </div>
    <!-- 只读状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">只读状态</h2>
      <sun-rate v-model="value6" readonly />
    </div>
    <!-- 监听 change 事件 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">监听 change 事件</h2>
      <sun-rate v-model="value7" @change="onChange" />
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3,
        value2: 4,
        value3: 2,
        value4: 4,
        value5: 4,
        value6: 2,
        value7: 3
      }
    },
    methods: {
      onChange(value) {
        this.$toast('当前值：' + value);
      }
    }
  }

</script>

<style lang="less">
  .sun-demo-rate {
    margin-top: 49px;
    min-height: 96vh;

    .sun-demo-nav-title {
      padding: 16px 3px;
      margin: 0;
    }

    .sun-demo-block {
      padding: 0 16px;
      margin-bottom: 10px;
    }
  }

</style>

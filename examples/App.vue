<template>
  <div class="app">
    <!-- 基础用法 -->
    <sun-checkbox v-model="checked">复选框</sun-checkbox>
    <!-- 禁用状态 -->
    <sun-checkbox v-model="checked" disabled>复选框</sun-checkbox>

    <!-- 自定义形状 -->
    <sun-checkbox v-model="checked" shape="square">复选框</sun-checkbox>
    <!-- 自定义颜色 -->
    <sun-checkbox v-model="checked" checked-color="#07c160">复选框</sun-checkbox>
    <!-- 自定义大小 -->
    <sun-checkbox v-model="checked" icon-size="24px">复选框</sun-checkbox>

    <!-- 自定义图标 -->
    <sun-checkbox v-model="checked">
      自定义图标
      <template #icon>
        <sun-icon name="plus"></sun-icon>
      </template>
    </sun-checkbox>

    <!-- 禁用文本点击 -->
    <sun-checkbox v-model="checked" label-disabled>复选框</sun-checkbox>

    <!-- 复选框组 -->
    <sun-checkbox-group v-model="result">
      <sun-checkbox name="a">复选框 a</sun-checkbox>
      <sun-checkbox name="b">复选框 b</sun-checkbox>
      <sun-checkbox name="c">复选框 c</sun-checkbox>
    </sun-checkbox-group>
    <!-- 水平排列 -->
    <sun-checkbox-group v-model="result" direction="horizontal">
      <sun-checkbox name="a">复选框 a</sun-checkbox>
      <sun-checkbox name="b">复选框 b</sun-checkbox>
      <sun-checkbox name="c">复选框 c</sun-checkbox>
    </sun-checkbox-group>

    <!-- 限制最大可选数 -->
    <sun-checkbox-group v-model="result" :max="2">
      <sun-checkbox name="a">复选框 a</sun-checkbox>
      <sun-checkbox name="b">复选框 b</sun-checkbox>
      <sun-checkbox name="c">复选框 c</sun-checkbox>
    </sun-checkbox-group>

    <!-- 全选与反选 -->
    <sun-checkbox-group v-model="result" ref="checkboxGroup">
      <sun-checkbox name="a">复选框 a</sun-checkbox>
      <sun-checkbox name="b">复选框 b</sun-checkbox>
      <sun-checkbox name="c">复选框 c</sun-checkbox>
    </sun-checkbox-group>

    <sun-button type="primary" @click="checkAll">全选</sun-button>
    <sun-button type="info" @click="toggleAll">反选</sun-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        result: ['b']
      }
    },
    methods: {
      checkAll() {
        this.$refs.checkboxGroup.toggleAll(true);
      },
      toggleAll() {
        this.$refs.checkboxGroup.toggleAll();
      },
    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

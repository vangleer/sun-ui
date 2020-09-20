<template>
  <div class="app">
    <sun-checkbox-group
      ref="group"
      max="6"
      checked-color="red"
      v-model="checkArr"
      @change="handleGroupChange"
    >
      <sun-checkbox name="a">复选框 a</sun-checkbox>
      <sun-checkbox name="b">复选框 b</sun-checkbox>
      <sun-checkbox name="c">复选框 c</sun-checkbox>
      <sun-checkbox name="d">复选框 d</sun-checkbox>
    </sun-checkbox-group>

    <sun-button type="primary" @click="$refs.group.toggleAll(true)">全选</sun-button>
    <sun-button type="danger" @click="$refs.group.toggleAll(false)">全不选</sun-button>
    <sun-button type="info" @click="$refs.group.toggleAll()">反选</sun-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkArr: ['a', 'c'],
    }
  },
  methods: {
    handleGroupChange(val) {
      console.log(this.checkArr, val)
    },
    handleSingleChange(val) {
      console.log(val)
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

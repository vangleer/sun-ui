<template>
  <div class="sun-swipe-item" @click="handleItemClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SunSwipeItem',
    methods: {
      handleItemClick() {
        this.$emit('click')
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-swipe-item {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }

</style>

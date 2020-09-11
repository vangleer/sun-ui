<template>
  <div>
    <sun-button icon="jiajian02" round plain type="primary">主要按钮</sun-button>
    <sun-button type="info">信息按钮</sun-button>
    <sun-button type="warning">警告按钮</sun-button>
    <sun-button type="danger">危险按钮</sun-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isAble: false
      }
    },
    methods: {
      handleClick() {
        console.log('你敢点我。。。')

      },
      handleTouchstart() {
        console.log('滑动')
      }
    }
  }

</script>
<style>
</style>

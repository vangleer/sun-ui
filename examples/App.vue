<template>
  <div class="app">
    <sun-button @click="handleClick" plain type="primary">显示/隐藏</sun-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        index: 0
      }
    },
    methods: {
      handleClick() {
        this.index++
        this.$message({
          message: '只是提示只是提示只是提示',
          duration: 1000,
          icon: 'loading',
          border: true,
          position: 'bottom',
          onClose: () => {
            console.log('关闭了')
          }
        })
      }
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div class="app">
    <sun-button type="primary" @click="handleClick">显示</sun-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$toast({
          message: '这是一个弹框',
          position: 'top',
          overlay: true
        })
      }
    }
  };

</script>

<style></style>

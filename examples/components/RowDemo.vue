<template>
  <div class="app">
    <sun-row gutter="20">
      <sun-col span="8">span: 8</sun-col>
      <sun-col span="8">span: 8</sun-col>
      <sun-col span="8">span: 8</sun-col>
    </sun-row>
    <sun-row gutter="20">
      <sun-col span="8">span: 8</sun-col>
      <sun-col span="8">span: 8</sun-col>
      <sun-col span="8">span: 8</sun-col>
    </sun-row>
  </div>
</template>

<script>
  import Button from './components/ButtonDemo'
  export default {
    components: {
      Button
    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .app {
    padding: 50px;
  }

</style>

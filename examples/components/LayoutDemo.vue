<template>
  <div class="app">
    <!-- Flex 主轴对齐方式，可选值为 end center space-around space-between -->
    <sun-row tag="section" class="my-row" type="flex" justify="space-between" align="center">
      <sun-col span="4">
        <div class="my-col">span4</div>
      </sun-col>
      <sun-col span="4">
        <div class="my-col">span4</div>
      </sun-col>
      <sun-col span="4">
        <div class="my-col">span4</div>
      </sun-col>
      <sun-col span="4">
        <div class="my-col">span4</div>
      </sun-col>
    </sun-row>
  </div>
</template>

<script>
  export default {};

</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .my-row {
    height: 100px;
  }

  .my-col {
    background-color: #39a9ed;
    color: #fff;
    text-align: center;
  }

</style>

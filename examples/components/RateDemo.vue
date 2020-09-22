<template>
  <div class="app">
    <!-- 基本使用 -->
    <!-- <sun-rate v-model="value"></sun-rate> -->
    <sun-rate v-model="value" count="20" icon="chu" void-icon="chu" gutter="20" color="red" size="20">
    </sun-rate>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3
      };
    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

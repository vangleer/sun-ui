<template>
  <div class="app">
    <sun-checkbox v-model="checked">
      复选框4
    </sun-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
      };
    },
    methods: {}
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

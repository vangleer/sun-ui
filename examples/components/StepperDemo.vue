<template>
  <div class="app">
    <sun-stepper v-model="value" @change="handleChange" theme="round" step="1" buttonSize="50" input-width="100" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value, this.value)
      }
    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

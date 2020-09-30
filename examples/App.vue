<template>
  <div class="app">
    <sun-cell title="我是标题">
      <sun-stepper v-model="value"></sun-stepper>
    </sun-cell>
    <!-- 圆角风格 -->
    <div class="sun-demo-block">
      <sun-cell title="圆角风格">
        <sun-stepper v-model="value" theme="round" button-size="22" disable-input />
      </sun-cell>
    </div>
    <div class="sun-demo-block">
      <sun-cell title="自定义大小">
        <sun-stepper v-model="value" input-width="40px" button-size="32px" />
      </sun-cell>
    </div>
  </div>
</template>

<script>
  import Coms from './components/ToastDemo'
  export default {
    components: {
      Coms
    },
    data() {
      return {
        checked: false,
        value: 2
      }
    },
    created() {
      console.log(this)
    }
  };

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div class="app">
    <BurronDemo/>

     <sun-button type="primary"
                      :isExtra="true">关闭效果</sun-button>
          <sun-button type="info"
                      effectWidth="10px">调整效果大小</sun-button>
  </div>
</template>

<script>
import BurronDemo from './components/ButtonDemo'
  export default {
    components:{BurronDemo}
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div class="app">
    <sun-button type="primary" @click="show=!show">显示</sun-button>
     <sun-dialog v-model="show" title="标题" message="这是一条提示!"></sun-dialog>
  </div>
</template>

<script>
  export default {
    data() {
     return { show:false}
    },
    methods:{
     
    }
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

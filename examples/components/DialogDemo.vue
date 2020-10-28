<template>
  <div class="app">
    <sun-button type="primary" @click="handleClick">显示</sun-button>
     <sun-dialog 
        v-model="show" 
        title="标题" 
        message="这是一条提示!" 
        message-align="right"
        theme="round-button"
        @confirm="handleConfirm"
     >
     <template #title>
       <div>这是标题</div>
     </template>
     这是内容
     </sun-dialog>
  </div>
</template>

<script>
  export default {
    data() {
     return { show:false}
    },
    methods:{
     handleConfirm() {
       console.log('触发啦确定事件')
     },
     handleClick() {
       this.show = !this.show
     }
    }
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div class="app">
    <sun-popup
      overlay-class="zi"
      :overlay-style="{backgroundColor:'red'}"
      position="bottom"
      round
      v-model="show"
      @click-overlay="handleOverLayClick"
      @click="handlePopupClick"
      @open="handleOpen"
      @close="handleClose"
      @opened="handleOpened"
      @closed="handleClosed"
    ></sun-popup>
    <sun-button type="primary" @click="handleShowClick">左边显示</sun-button>
    <sun-button type="danger" @click="handleDangerClick">点我测试</sun-button>
    <sun-popup close-icon-position="bottom-right" v-model="show2" closeable round position="top"></sun-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      overObj: {},
    }
  },
  methods: {
    handleDangerClick() {
      this.show2 = true
    },
    handleShowClick() {
      this.show = true
      console.log(this.show)
    },
    handleOpen() {
      console.log('开启弹框了')
    },
    handleClose() {
      console.log('关闭弹框了')
    },
    handleOpened() {
      console.log('全部开启弹框了')
    },
    handleClosed() {
      console.log('全部关闭弹框了')
    },
    handlePopupClick(e) {
      console.log('点击弹框了...')
      console.log(e)
    },
    handleClick() {
      this.overObj = { opacity: 0 }
    },
    handleOverLayClick() {
      console.log('点击遮罩层了')
    },
  },
}
</script>
<style>
.overplay {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.4;
  transition: opacity 2s;
}
</style>

<template>
  <div class="app">
    <sun-button type="primary" @click="handleClick">按钮</sun-button>
    <sun-button type="danger" @click="handleClick2">测试2</sun-button>
    <sun-button type="primary" @click="$toast.success('成功的方法')">成功</sun-button>
    <sun-button type="info" @click="$toast.fail('失败的方法')">失败</sun-button>
    <sun-button type="warning" @click="$toast.loading({message:'加载的方法',position:'top'})">加载</sun-button>
  </div>
</template>

<script>
export default {
  created() {},
  methods: {
    handleClick() {
      // this.$toast('啦啦')
      this.$toast({
        message: '这是需要显示的文本',
        duration: 3000,
        position: 'bottom',
        type: 'fail',
        onClose() {
          console.log('关闭咯')
        },
        onOpened() {
          console.log('开启咯')
        },
        // closeOnClick: true,
      })
    },
    handleClick2() {
      this.$toast('啦啦啦。。。')
    },
  },
}
</script>

<style>
</style>
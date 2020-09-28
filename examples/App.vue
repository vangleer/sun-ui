<template>
  <div class="app">
    <sun-cell title="文字提示" is-link bg-cffect @click="$toast('提示内容')" />
    <sun-cell title="加载提示" is-link bg-cffect @click="$toast.loading('加载中...')" />
    <sun-cell title="成功提示" is-link bg-cffect @click="$toast.success('成功提示')" />
    <sun-cell title="失败提示" is-link bg-cffect @click="$toast.fail('失败提示')" />
    <sun-cell title="自定义图标" is-link bg-cffect @click="$toast({message:'自定义图标',icon:'like-o'})" />
    <sun-cell title="自定义图片" is-link bg-cffect
      @click="$toast.loading({message:'自定义图片',icon:'https://img.yzcdn.cn/vant/logo.png'})" />
    <sun-cell title="自定义加载图标" is-link bg-cffect @click="$toast.loading({message:'加载中...',icon:'loading2'})" />

    <sun-cell title="顶部展示" is-link bg-cffect @click="$toast({message:'顶部展示', position: 'top'})" />
    <sun-cell title="底部展示" is-link bg-cffect @click="$toast({message:'底部展示', position: 'bottom'})" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showCenter: false
      }
    },
    methods: {
      handleShow() {
        this.showCenter = true
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

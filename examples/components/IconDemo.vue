<template>
  <div class="app">
    <div>
      <sun-icon @click="handleClick" name="jiajian02" color="pink"></sun-icon>
    </div>

    <div>
      <sun-icon badge="1sad" name="chu" size="30"></sun-icon>
    </div>
    <div>
      <sun-icon dot dot-color="pink" name="shang" size="3rem" color="blue"></sun-icon>
    </div>
    <div>
      <sun-icon size="30px" name="https://b.yzcdn.cn/vant/icon-demo-1126.png"></sun-icon>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        console.log('click')
      }
    }
  }

</script>
<style>
</style>

<template>
  <div class="app">
    <sun-cell title="标题" label="描述信息" value="内容"></sun-cell>
    <sun-cell title="标题" icon="left" value="内容"></sun-cell>
    <sun-cell value="内容" value-class="value_d"></sun-cell>
    <sun-cell title-style="color: red;font-size: 30px;" title="标题" value="内容"></sun-cell>

    <sun-cell title="标题" label="描述信息" value="内容" is-link>
      <template #title>这是插槽标题</template>
      <template #value>插槽内容</template>
    </sun-cell>
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

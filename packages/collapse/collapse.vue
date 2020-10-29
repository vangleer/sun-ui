<template>
  <div class="sun-collapse" :class="{'sun-collapse-border':border}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'SunCollapse',
  provide() {
    return {
      parentCollapse:this
    }
  },
  props:{
    value:{
      type:String|Number|Array
    },
    accordion:{type:Boolean},
    border:{type:Boolean,default:false}
  }
}
</script>

<style lang="less" scoped>
.sun-collapse {
  position: relative;
}
.sun-collapse-border {
  border: 1px solid #ccc;
}
</style>
<template>
  <div class="sun-tab">
    <span class="sun-tab-title">{{title}}</span>
    <div class="sun-tab-pane">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'SunTab',
  inject:['tabs'],
  props:{
    title:{
      type:String
    }
  },
  mounted() {
   
  }
}
</script>

<style>
 .sun-tab {
    flex: 1;
    display: flex;
    line-height: 20px;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
}
.sun-tab-pane {
  color: red;
}
</style>
<template>
  <div class="app">
    <!-- 基础用法 -->
     <div class="box">
       <sun-collapse v-model="activeNames">
        <sun-collapse-item title="标题1" name="1">内容</sun-collapse-item>
        <sun-collapse-item title="标题2" name="2">内容</sun-collapse-item>
        <sun-collapse-item title="标题3" name="3">内容</sun-collapse-item>
      </sun-collapse>
     </div>

    <!-- 手风琴 -->
    <div class="box">
      <sun-collapse v-model="activeName" accordion @change="handleChange">
        <sun-collapse-item title="标题1" name="1">内容</sun-collapse-item>
        <sun-collapse-item title="标题2" name="2">内容</sun-collapse-item>
        <sun-collapse-item title="标题3" name="3">内容</sun-collapse-item>
      </sun-collapse>
    </div>
    

    <!-- 禁用状态 -->
    <div class="box">
      <sun-collapse v-model="activeNames">
        <sun-collapse-item title="标题1" name="1">内容</sun-collapse-item>
        <sun-collapse-item title="标题2" name="2" disabled>内容</sun-collapse-item>
        <sun-collapse-item title="标题3" name="3" disabled>内容</sun-collapse-item>
      </sun-collapse>
    </div>

    <!-- 自定义标题内容 -->
    <div class="box">
       <sun-collapse v-model="activeNames">
        <sun-collapse-item name="1">
          <template #title>
            <div>标题1 <sun-icon name="success-o" /></div>
          </template>
          内容
        </sun-collapse-item>
        <sun-collapse-item title="标题2" name="2" icon="category-o">
          内容
        </sun-collapse-item>
      </sun-collapse>
    </div>
   
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames:['1'],
      activeName:'1'
    }
  },
  methods:{
    handleChange(index) {
      console.log(index,'adasdas')
    }
  }
}
</script>

<style lang="less">
.app {
  padding: 50px 20px;
  background-color: #eee;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  margin-top: 30px;
}
</style>
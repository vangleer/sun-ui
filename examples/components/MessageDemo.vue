<template>
  <div class="sun-demo-message">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Message" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="文字提示" is-link bg-cffect @click="$message('提示内容')" />
      </div>
    </div>

    <!-- 消息类型 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">消息类型</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="成功消息" is-link bg-cffect @click="$message({message:'成功消息',icon:'success'})" />
        <sun-cell title="失败消息" is-link bg-cffect @click="$message({message:'失败消息',icon:'error'})" />
        <sun-cell title="信息提示" is-link bg-cffect @click="$message({message:'信息提示',icon:'info'})" />
        <sun-cell title="警告消息" is-link bg-cffect @click="$message({message:'警告消息',icon:'warning'})" />
        <sun-cell title="加载消息" is-link bg-cffect @click="$message({message:'加载消息',icon:'loading'})" />
      </div>
    </div>

    <!-- 是否显示边框 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">是否显示边框</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="成功消息" is-link bg-cffect @click="$message({message:'成功消息',icon:'success',border:true})" />
        <sun-cell title="失败消息" is-link bg-cffect @click="$message({message:'失败消息',icon:'error',border:true})" />
      </div>
    </div>

    <!-- 显示位置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">显示位置</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="成功消息" is-link bg-cffect
          @click="$message({message:'成功消息',icon:'success',border:true,position:'center'})" />
        <sun-cell title="失败消息" is-link bg-cffect
          @click="$message({message:'失败消息',icon:'error',border:true,position:'bottom'})" />
      </div>
    </div>

    <!-- 自定义时长 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义时长</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="自定义时长" is-link bg-cffect
          @click="$message({message:'自定义时长',icon:'success',border:true,duration:3000})" />
      </div>
    </div>

  </div>
</template>

<script>
  export default {}

</script>

<style lang="less">
  .sun-demo-message {
    margin-top: 49px;
    min-height: 96vh;
    background-color: #f8f8f8;

    .sun-demo-block {
      padding: 0 16px;
    }

    .sun-demo-nav-title {
      padding: 16px 3px;
      margin: 0;
    }

    .sun-demo-nav-row {
      background-color: #fff;
      border-radius: 12px;
      margin-bottom: 10px;
    }
  }

</style>

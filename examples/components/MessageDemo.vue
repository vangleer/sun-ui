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
        <sun-cell title="成功消息" is-link bg-cffect @click="$message({message:'成功消息',type:'success'})" />
        <sun-cell title="失败消息" is-link bg-cffect @click="$message({message:'失败消息',type:'error'})" />
        <sun-cell title="信息提示" is-link bg-cffect @click="$message({message:'信息提示',type:'info'})" />
        <sun-cell title="警告消息" is-link bg-cffect @click="$message({message:'警告消息',type:'warning'})" />
        <sun-cell title="加载消息" is-link bg-cffect @click="$message({message:'加载消息',type:'loading'})" />
      </div>
    </div>

    <!-- 是否显示边框 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">是否显示边框</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="成功消息" is-link bg-cffect @click="$message({message:'成功消息',type:'success',border:true})" />
        <sun-cell title="失败消息" is-link bg-cffect @click="$message({message:'失败消息',type:'error',border:true})" />
      </div>
    </div>

    <!-- 显示位置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">显示位置</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="成功消息" is-link bg-cffect
          @click="$message({message:'成功消息',type:'success',border:true,position:'center'})" />
        <sun-cell title="失败消息" is-link bg-cffect
          @click="$message({message:'失败消息',type:'error',border:true,position:'bottom'})" />
      </div>
    </div>

    <!-- 自定义配置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义配置</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="自定义时长" is-link bg-cffect
          @click="$message({message:'自定义时长',type:'success',border:true,duration:3000})" />
        <sun-cell title="自定义颜色" is-link bg-cffect @click="$message({message:'自定义颜色',border:true,color:'pink'})" />
        <sun-cell title="自定义图标" is-link bg-cffect @click="$message({message:'自定义图标',border:true,icon:'plus'})" />
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

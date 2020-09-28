<template>
  <div class="app">
    <!-- 基础展示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础展示</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="单元格" value="内容" />
        <sun-cell title="单元格" value="内容" label="描述信息" />
      </div>
    </div>

    <!-- 图标展示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">图标展示</h2>
      <div class="sun-demo-nav-row">
        <sun-cell icon="friends" title="单元格" value="内容" />
      </div>
    </div>

    <!-- 展示箭头 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">展示箭头</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="单元格" is-link />
        <sun-cell title="单元格" is-link value="内容" />
        <sun-cell title="单元格" is-link arrow-direction="down" value="内容" />
      </div>
    </div>

    <!-- 点击背景效果 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">点击背景效果</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="单元格" :bgEffect="true" />
        <sun-cell title="单元格" :bgEffect="false" value="内容" />
      </div>
    </div>

    <!-- 使用插槽 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">使用插槽</h2>
      <div class="sun-demo-nav-row">
        <sun-cell>
          <template #title>
            <span>这是单元格</span>
            <sun-button size="mini" type="danger">按钮</sun-button>
          </template>
        </sun-cell>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div class="sun-col" :class="{['sun-col-'+span]:!!span,['sun-col-offset-'+offset]:!!offset}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SunCol',
    props: {
      span: {
        type: Number | String,
        default: ''
      },
      offset: {
        type: Number | String,
        default: ''
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../style/var.less";

  // 生成width
  .base-col-width(@n, @name, @num) {
    .sun-col-@{n} {
      @{name}: 100% / @gridNum * @num;
    }
  }

  // 生成offset
  .base-col-offset(@n, @name, @num) {
    .sun-col-offset-@{n} {
      @{name}: 100% / @gridNum * @num;
    }
  }

  // 循环生成宽度
  .loopWidth(@i) when (@i < 25) {
    .base-col-width(@i, width, @i);
    .loopWidth(@i+1);
  }

  // 循环生成offset
  .loopOffset(@i) when (@i < 25) {
    .base-col-offset(@i, margin-left, @i);
    .loopOffset(@i+1);
  }

  // 调用
  .loopWidth(1);
  .loopOffset(1);

  // 默认样式
  .sun-col {
    float: left;
    box-sizing: border-box;
    min-height: 1px;
  }

</style>

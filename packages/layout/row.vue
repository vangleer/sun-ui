<template>
  <div class="sun-row" ref="rows">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SunRow',
    props: {
      gutter: {
        type: String | Number,
        default: 0
      }
    },
    data() {
      return {
        calGutter: 0
      }
    },
    mounted() {
      if (!!this.gutter) {
        let rowList = this.$refs.rows.children
        if (rowList.length !== 0) {
          this.calGutter = parseInt(this.gutter) / 2
          rowList[0].style.paddingRight = this.calGutter + 'px'
          rowList[rowList.length - 1].style.paddingLeft = this.calGutter + 'px'
          for (let i = 1; i < rowList.length - 1; i++) {
            rowList[i].style.padding = `0 ${this.calGutter}px`
          }
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../style/var.less";

  .sun-row {
    display: block;

  }

  .sun-row::after {
    content: '';
    display: none;
    height: 0;
    clear: both;
  }

</style>

<template>
  <component :is="tag" class="sun-row"
    :class="[type?'sun-row-'+type:'',justify?'sun-row-flex-justify-'+justify:'',align?'sun-row-flex-align-'+align:'']"
    ref="rows">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: 'SunRow',
    props: {
      gutter: {
        type: String | Number,
        default: 0
      },
      type: {
        type: String,
        default: ''
      },
      justify: {
        type: String
      },
      align: {
        type: String
      },
      tag: {
        type: String,
        default: 'div'
      }
    },
    data() {
      return {
        calGutter: 0
      }
    },
    mounted() {
      if (!!this.gutter) {
        this.handleCalGutter()
      }
    },
    methods: {
      // 计算 gutter
      handleCalGutter() {
        let rowList = this.$refs.rows.children
        if (rowList.length !== 0) {
          for (let i = 0; i < rowList.length - 1; i++) {
            rowList[i].style.marginRight = this.$calSize(this.gutter)
          }
          rowList[rowList.length].style.marginRight = '0px'
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

  .sun-row-flex {
    display: flex;
  }

  .sun-row-flex-justify-end {
    justify-content: flex-end;
  }

  .sun-row-flex-justify-center {
    justify-content: center;
  }

  .sun-row-flex-justify-space-around {
    justify-content: space-around;
  }

  .sun-row-flex-justify-space-between {
    justify-content: space-between;
  }

  .sun-row-flex-align-center {
    align-items: center;
  }

  .sun-row-flex-align-end {
    align-items: flex-end;
  }

</style>

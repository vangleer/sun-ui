<template>
  <div class="sun-rate" :class="{'sun-rate-disabled':disabled}">
    <div class="sun-rate-item" v-for="item in calCount" :style="{marginRight:calGutter}" :key="item"
      @click="handleClick(item)">
      <i class="sun-icon" :class="[item<=value?'sun-icon-'+icon:'sun-icon-'+voidIcon]"
        :style="{color:item<=value?color:voidColor,fontSize:calSize}"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunRate',
    props: {
      value: { // v-model的值
        type: String | Number
      },
      icon: { // 选中的图标
        type: String,
        default: 'success'
      },
      voidIcon: { // 未选中的图标
        type: String,
        default: 'success-o'
      },
      color: { // 选中的颜色
        type: String,
        color: '#ee0a24'
      },
      voidColor: {
        type: String,
        default: '#c8c9cc'
      },
      gutter: {
        type: String | Number
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      count: {
        type: Number | String,
        default: 5
      },
      size: {
        type: String | Number
      }
    },
    computed: {
      calGutter() {
        return /px|em|rem|%/.test(this.gutter) ? this.gutter : this.gutter + 'px'
      },
      calSize() {
        return /px|em|rem|%/.test(this.size) ? this.size : this.size + 'px'
      },
      calCount() {
        return parseInt(this.count)
      }
    },
    data() {
      return {

      }
    },
    watch: {
      value(newVal) {
        this.$emit('change', newVal)
      }
    },
    methods: {
      handleClick(item) {
        if (this.disabled) return
        if (this.readonly) return
        this.$emit('input', item)
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-rate {
    display: inline-flex;
  }

  .sun-rate-item {
    margin-right: 6px;
    cursor: pointer;

    .sun-icon {
      font-size: 20px;
    }
  }

  .sun-rate-disabled {
    cursor: not-allowed;

    .sun-icon {
      color: #ccc !important;
    }
  }

</style>

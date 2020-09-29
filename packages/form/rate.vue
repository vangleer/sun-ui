<template>
  <div class="sun-rate" :class="{'sun-rate-disabled':disabled}">
    <div class="sun-rate-item" v-for="item in calCount" :style="{marginRight:$calSize(gutter)}" :key="item"
      @click="handleClick(item)">
      <i class="sun-icon" :class="[item<=value?'sun-icon-'+icon:'sun-icon-'+voidIcon]"
        :style="{color:item<=value?color:voidColor,fontSize:$calSize(size)}"></i>
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
        default: 'star-f'
      },
      voidIcon: { // 未选中的图标
        type: String,
        default: 'star-o'
      },
      color: { // 选中的颜色
        type: String,
        default: '#ee0a24'
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

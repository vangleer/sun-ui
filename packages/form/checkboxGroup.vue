<template>
  <div class="sun-checkbox-group" :class="{'sun-checkbox-group-horizontal':direction==='horizontal'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SunCheckboxGroup',
    provide() {
      return {
        checkboxGroup: this,
        isGroupDisabled: this.disabled,
      }
    },
    props: {
      value: {
        type: Array,
        default () {
          return []
        },
      },
      disabled: {
        type: Boolean,
      },
      iconSize: {
        type: String | Number,
        default: '16px',
      },
      checkedColor: {
        type: String,
      },
      max: {
        type: String | Number,
        default: 0,
      },
      direction: {
        type: String,
        default: 'vertical',
      },
    },
    watch: {
      value(newVal) {
        this.$emit('change', newVal)
      },
    },
    mounted() {},
    methods: {
      toggleAll(flag) {
        if (typeof flag === 'undefined') {
          if (this.value.length > 0) {
            this.$emit('input', [])
          } else {
            let list = this.$children.map((item) => item.name)
            this.$emit('input', list)
          }
          return
        }
        if (flag) {
          let list = this.$children.map((item) => item.name)
          this.$emit('input', list)
        } else {
          this.$emit('input', [])
        }
      },
    },
  }

</script>

<style lang="less" scoped>
  .sun-checkbox-group-horizontal {
    display: flex;
  }

</style>

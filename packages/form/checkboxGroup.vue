<template>
  <div class="sun-checkbox-group">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunCheckboxGroup',
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      }
    },
    mounted() {
      this.handleInit()
    },
    methods: {
      handleInit() {
        const childList = this.$children
        childList.forEach(item => {
          if (this.value.includes(item.name)) {
            console.log(item._props.value)
            item._props.value = true
          }
        })
      }
    }
  }

</script>

<style lang="less" scoped>

</style>

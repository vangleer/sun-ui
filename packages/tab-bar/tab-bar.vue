<template>
  <div ref="sunTabbar" class="sun-tabbar" :style="{zIndex:zIndex,color:inactiveColor}"
    :class="[fixed?'':'sun-tabbar-nofixed',border?'':'sun-tabbar-noborder']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SunTabbar',
    props: {
      fixed: {
        type: Boolean,
        default: true
      },
      value: {
        type: String | Number,
        default: 0
      },
      border: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: String | Number,
        default: 1
      },
      activeColor: {
        type: String,
        default: '#1989fa'
      },
      inactiveColor: {
        type: String,
        default: '#7d7e80'
      }
    },
    mounted() {
      let tabList = this.$refs.sunTabbar.children
      tabList[this.value].classList.add('sun-tabbar-item-active')
      tabList.forEach((item, index) => {
        item.addEventListener('click', () => {
          this.$emit('input', index)
          this.$emit('change', index)
          this.handleChangeClassName(tabList)
          tabList[index].classList.add('sun-tabbar-item-active')
          tabList[index].style.color = this.activeColor
        })
      })
      tabList[this.value].style.color = this.activeColor
    },
    methods: {
      handleChangeClassName(list) {
        list.forEach((item, index) => {
          item.classList.remove('sun-tabbar-item-active')
          item.style.color = this.inactiveColor
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-tabbar {
    position: fixed;
    display: flex;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    border-top: 1px solid #ebedf0;
    z-index: 1;
  }

  .sun-tabbar-nofixed {
    position: absolute;
  }

  .sun-tabbar-noborder {
    border-top: 0;
  }

</style>

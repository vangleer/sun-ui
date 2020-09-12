<template>
  <i @click="handleIconClick" class="sun-icon" :class="{['sun-icon-'+name]:!isUrl}"
    :style="{color:color,fontSize:fontSize}">
    <span v-if="dot" class="sun-icon-dot" :style="{backgroundColor: dotColor}"></span>
    <span v-if="badge" class="sun-icon-badge">{{badge}}</span>
    <img class="sun-icon-img" :style="{width:fontSize,height:fontSize}" v-if="isUrl" :src="name" alt="">
  </i>
</template>

<script>
  export default {
    name: "SunIcon",
    props: {
      name: { // 图标名称
        type: String,
        default: ''
      },
      color: { // 颜色
        type: String,
        default: ''
      },
      size: {
        default: '16px'
      },
      badge: {

      },
      dot: {
        type: Boolean,
        default: false
      },
      dotColor: {
        type: String,
        default: '#f10'
      },
      badge: {
        default: ''
      }
    },
    data() {
      return {
        fontSize: '',
        isUrl: false
      }
    },
    mounted() {
      if (this.name.indexOf('.') !== -1 || this.name.indexOf('/') !== -1) {
        this.isUrl = true
      }
      if (this.size.indexOf('em') !== -1) {
        this.fontSize = this.size
      } else {
        this.fontSize = parseInt(this.size) + 'px'
      }
    },
    methods: {
      handleIconClick() {
        this.$emit('click')
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-icon {
    position: relative;
  }

  // 小点
  .sun-icon-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    top: -4px;
    right: -4px;
    border-radius: 50%;
    z-index: 1;
  }

  // 图标右上角徽标的内容
  .sun-icon-badge {
    position: absolute;
    height: 16px;
    top: -8px;
    left: 100%;
    border-radius: 8px;
    background-color: red;
    color: #fff;
    padding: 0 6px;
    box-sizing: border-box;
    font-size: 12px;
    font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
    line-height: 16px;
    z-index: 1;
  }

</style>

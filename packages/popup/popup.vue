<template>
  <div>
    <div
      class="sun-overlay"
      :class="[overlayClass]"
      :style="overlayStye"
      @click="handleOverlayClick"
    ></div>
    <div
      class="sun-popup"
      :style="styleObj"
      :class="['sun-popup-'+position,round?'sun-popup-round':'']"
      @click="handlePopupClick"
    >
      <img
        class="sun-popup-cross-img"
        :class="['sun-popup-icon-close-'+closeIconPosition]"
        v-if="isUrl&&closeable"
        :src="closeIcon"
        alt
        @click="handleCrossClick"
      />
      <i
        v-if="closeable&&!isUrl"
        class="sun-icon sun-popup-cross"
        :class="['sun-icon-'+closeIcon,'sun-popup-icon-close-'+closeIconPosition]"
        @click="handleCrossClick"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SunPopup',
  props: {
    value: {
      type: Boolean | String,
      default: false,
    },
    position: {
      type: String,
      default: 'center',
    },
    duration: {
      type: Number | String,
      default: 0.3,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    overlayClass: {
      type: String,
    },
    overlayStyle: {
      type: Object,
    },
    round: {
      type: Boolean,
      default: false,
    },
    closeable: {
      // 是否显示关闭图标
      type: Boolean,
      default: false,
    },
    closeIcon: {
      // 图标名称
      type: String,
      default: 'cheng',
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
  },
  data() {
    return {
      styleObj: {},
      overlayStye: {},
      isUrl: false,
    }
  },
  mounted() {
    if (!this.value) {
      this.overlayStye = {
        opacity: 0,
        display: 'none',
        transition: `opacity ${this.duration}s`,
        ...this.overlayStyle,
      }
    }
    this.styleObj.transition = `transform ${this.duration}s`
    if (this.position === 'center') {
      this.styleObj.display = this.value ? 'block' : 'none'
    }

    // 判断用户closeIcon是否是图片地址
    let reg = /\.|\.png|\.jpg|\.jepg|\.webp/
    if (reg.test(this.closeIcon)) {
      this.isUrl = true
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue) {
        // 只要一点击开启就出发open事件
        this.$emit('open')
        this.handleShow()
      } else {
        // 只要一点击关闭就出发close事件
        this.$emit('close')
        this.handleHide()
      }
    },
  },
  methods: {
    handleCrossClick() {
      // 点击关闭按钮
      this.$emit('input', false)
    },
    handlePopupClick(e) {
      this.$emit('click', e)
    },
    // 点击遮罩层
    handleOverlayClick() {
      this.$emit('input', false)
      this.$emit('click-overlay')
    },
    handleShow() {
      let position = this.position
      // 显示
      switch (position) {
        case 'left':
          this.styleObj.transform = 'translateX(0%)'
          break
        case 'right':
          this.styleObj.transform = 'translateX(0%)'
          break
        case 'top':
          this.styleObj.transform = 'translateY(0%)'
          break
        case 'bottom':
          this.styleObj.transform = 'translateY(0%)'
          break
        default:
          this.styleObj.display = 'block'
          break
      }
      if (this.overlay) {
        this.setOverlayStyle(0.5, 'block')
      } else {
        this.setOverlayStyle(0, 'block')
      }

      // 当开启弹框并且动画执行完毕后触发opened事件
      setTimeout(() => {
        this.$emit('opened')
      }, this.duration * 1100)
    },
    handleHide() {
      let position = this.position
      // 显示
      switch (position) {
        case 'left':
          this.styleObj.transform = 'translateX(-100%)'
          break
        case 'right':
          this.styleObj.transform = 'translateX(100%)'
          break
        case 'top':
          this.styleObj.transform = 'translateY(-100%)'
          break
        case 'bottom':
          this.styleObj.transform = 'translateY(100%)'
          break
        default:
          this.styleObj.display = 'none'
          break
      }
      this.setOverlayStyle(0, 'none')
      // 当关闭弹框并且动画执行完毕后触发closed事件
      setTimeout(() => {
        this.$emit('closed')
      }, this.duration * 1100)
    },
    setOverlayStyle(opacity, dispaly) {
      this.overlayStye.opacity = opacity

      if (this.value) {
        this.overlayStye.display = dispaly
      } else {
        setTimeout(() => {
          this.overlayStye.display = dispaly
        }, this.duration * 1000)
      }
    },
  },
}
</script>

<style lang="less" scoped>
@keyframes transEffect {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}
.sun-overlay {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2019;
  width: 100vw;
  height: 100vh;
  transition: opacity 2s;
  opacity: 0.5;
  background-color: #000;
  display: none;
  // opacity: 0;
}
.sun-popup {
  position: fixed;
  z-index: 2020;
  background-color: #fff;
  transition: transform 1s;
  background-color: pink;
  // 图标
  .sun-popup-cross {
    position: absolute;
    z-index: 1;
    color: #c8c9cc;
    font-size: 22px;
    cursor: pointer;
  }
  // 图片
  .sun-popup-cross-img {
    position: absolute;
    z-index: 1;
    width: 22px;
    height: 22px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
}
// 上弹出
.sun-popup-top {
  left: 0;
  top: 0;
  width: 100vw;
  height: 30%;
  transform: translateY(-100%);
  &.sun-popup-round {
    border-radius: 0 0 20px 20px;
  }
}
// 下弹出
.sun-popup-bottom {
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 30%;
  transform: translateY(100%);
  &.sun-popup-round {
    border-radius: 20px 20px 0 0;
  }
}
// 默认中间弹出
.sun-popup-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 30%;
  &.sun-popup-round {
    border-radius: 20px;
  }
}
// 左弹出
.sun-popup-left {
  left: 0;
  top: 0;
  height: 100vh;
  width: 30%;
  transform: translateX(-100%);
  &.sun-popup-round {
    border-radius: 0 20px 20px 0;
  }
}
// 右弹出
.sun-popup-right {
  right: 0;
  top: 0;
  height: 100vh;
  width: 30%;
  transform: translateX(100%);
  &.sun-popup-round {
    border-radius: 20px 0 0 20px;
  }
}
.sun-popup-icon-close-top-left {
  top: 16px;
  left: 16px;
}
.sun-popup-icon-close-top-right {
  top: 16px;
  right: 16px;
}
.sun-popup-icon-close-bottom-left {
  bottom: 16px;
  left: 16px;
}
.sun-popup-icon-close-bottom-right {
  bottom: 16px;
  right: 16px;
}
</style>
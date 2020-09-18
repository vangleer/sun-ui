<template>
  <!-- ,{'is-extra':isExtraMode} -->
  <component :is="tag" @touchstart="handleTouch" @click="handleBtnClick" class="sun-btn" :class="[
            color ? '' : 'sun-btn-' + type,
            {
              'is-extra': isExtraMode && size !== 'large',
              ['sun-btn-' + size]: size,
              'sun-btn-plain': plain,
              'sun-btn-disabled': disabled,
              'sun-btn-round': round
            }
          ]" :style="styleObj">
    <!-- 图标 -->
    <i :class="['sun-icon','sun-icon-' + icon]" v-if="icon" :style="{ marginRight: '5px' }"></i>
    <span class="sun-btn-text" v-if="$slots.default">
      <slot></slot>
    </span>
    <span class="sun-btn-text" v-if="text">
      {{ text }}
    </span>
  </component>
</template>

<script>
  export default {
    name: "SunButton",
    props: {
      type: {
        type: String,
        default: "default"
      },
      tag: {
        type: String,
        default: 'button'
      },
      isExtra: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ''
      },
      plain: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      effectWidth: {
        type: String,
        default: '6px'
      }
    },
    data() {
      return {
        isExtraMode: false,
        classArr: [],
        styleObj: {}
      };
    },
    created() {},
    mounted() {
      const {
        color,
        size,
        plain,
      } = this

      let bgColor = ''
      let fontColor = ''
      if (color) bgColor = color
      if (plain) fontColor = color
      if (color && plain) {
        bgColor = '#fff'
      }
      if (color != '#fff' && color.indexOf('gradient') !== -1) {
        fontColor = '#fff'
      }
      if (color.indexOf('gradient') !== -1 && plain) {
        fontColor = '#000'
      }
      this.styleObj = {
        background: bgColor,
        marginRight: '16px',
        color: fontColor,
        borderColor: color
      }
    },
    methods: {
      handleBtnClick(e) {
        const button = window.getComputedStyle ? window.getComputedStyle(e.currentTarget, null) : e.currentTarget
          .currentStyle;
        const borderColor = button.borderColor
        document.styleSheets[0].addRule('.is-extra::after', `border: ${this.effectWidth} solid ${borderColor};`);
        // 控制动画
        this.isExtraMode = true;
        if (!this.isExtra) {
          this.isExtraMode = false;
        }
        setTimeout(() => {
          this.isExtraMode = false;
        }, 300);
        // 触发组件点击事件
        if (!this.disabled) {
          this.$emit("click");
        }
      },
      handleTouch() {
        // 滑动时间
        if (!this.disabled) {
          this.$emit("touchstart");
        }
      }
    }
  };

</script>

<style lang="less" scoped>
  @import "../style/var.less";

  button {
    border: 0;
    outline: 0;
    color: inherit;
  }

  .btn-before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: #000;
    opacity: 0.1;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .btn-after(@color) {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.1;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: all 0.2s;
  }

  .sun-btn {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: @button-default-height;
    margin: 0;
    padding: 0 @padding-md;
    font-size: @button-default-font-size;
    line-height: @button-default-line-height;
    text-align: center;
    border-radius: @button-border-radius;
    cursor: pointer;
    transition: opacity @animation-duration-fast;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    border: 1px solid #ebedf0;

    &:active {
      &::before {
        .btn-before;
      }
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      opacity: 0.1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      transition: all 0.2s;
    }
  }

  .sun-btn-mini {
    padding: 0 @padding-xs;
    line-height: @button-mini-height;
    height: @button-mini-height;
    font-size: @button-mini-font-size;
  }

  .sun-btn-small {
    padding: 0 @padding-sm;
    line-height: @button-small-height;
    height: @button-small-height;
    font-size: @button-small-font-size;
  }

  .sun-btn-large {
    display: block;
    width: 100%;
    line-height: @button-large-height;
    height: @button-large-height;
    font-size: @button-default-font-size;
  }

  .sun-btn-primary {
    color: @button-primary-color;
    background: @button-primary-background-color;
    border-color: @button-primary-border-color;
  }

  .sun-btn-primary.sun-btn-plain {
    background-color: @button-plain-background-color;
    color: @button-primary-background-color;
  }

  .sun-btn-info {
    color: @button-info-color;
    background: @button-info-background-color;
    border-color: @button-info-border-color;
  }

  .sun-btn-info.sun-btn-plain {
    background-color: @button-plain-background-color;
    color: @button-info-border-color;
  }

  .sun-btn-danger {
    color: @button-danger-color;
    background: @button-danger-background-color;
    border-color: @button-danger-border-color;
  }

  .sun-btn-danger.sun-btn-plain {
    background-color: @button-plain-background-color;
    color: @button-danger-background-color;
  }

  .sun-btn-warning {
    color: @button-warning-color;
    background: @button-warning-background-color;
    border-color: @button-warning-border-color;
  }

  .sun-btn-warning.sun-btn-plain {
    background-color: @button-plain-background-color;
    color: @button-warning-background-color;
  }

  .sun-btn-disabled {
    opacity: @button-disabled-opacity;
    cursor: not-allowed;
    touch-action: none;
  }

  .sun-btn-round {
    border-radius: 30px;
  }

</style>

<template>
  <component :is="tag" class="sun-cell" :class="{ 'sun-cell-border': border,'sun-cell-effect':calBgEffect }"
    @click="handleCellClick">
    <div v-if="title&&!$slots.title" :class="[titleClass]" :style="titleStyle" class="sun-cell-title">
      <span>
        <i v-if="icon&&$slots.icon" :class="['sun-icon','sun-icon-'+icon]"></i>
        <div v-else>
          <slot name="icon"></slot>
        </div>
        {{ title }}
      </span>
      <p v-if="label" class="sun-cell-label" :class="[labelClass]">{{label}}</p>
    </div>
    <div v-else :class="[titleClass]" :style="titleStyle" class="sun-cell-title">
      <slot name="title"></slot>
    </div>

    <div v-if="(value||isLink)&&!$slots.default" :style="{textAlign:title?'right':'left'}" class="sun-cell-value"
      :class="[valueClass]">
      <span>{{ value }}</span>
      <i v-if="isLink" :class="['sun-icon', 'sun-icon-'+arrowDirection]"></i>
    </div>
    <div v-else class="sun-cell-value-slot sun-cell-value" :class="[valueClass]">
      <slot></slot>
      <i v-if="isLink" :class="['sun-icon', 'sun-icon-'+arrowDirection]"></i>
    </div>
  </component>
</template>

<script>
  export default {
    name: 'SunCell',
    props: {
      // 标题
      title: {
        type: String | Number,
        default: '',
      },
      tag: {
        type: String,
        default: 'div'
      },
      value: {
        // 内容
        type: String | Number,
        default: '',
      },
      border: {
        // 是否要边框
        type: Boolean,
        default: true,
      },
      label: {
        // 标签
        type: String,
        default: '',
      },
      icon: {
        // 图标
        type: String,
        default: '',
      },
      isLink: {
        // 是否显示右侧箭头
        type: Boolean,
        default: false,
      },
      arrowDirection: {
        // 箭头方向
        type: String,
        default: 'arrow-right',
      },
      titleStyle: {
        default: '',
      },
      titleClass: {
        default: '',
      },
      valueClass: {
        default: '',
      },
      labelClass: {
        default: '',
      },
      bgEffect: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        calBgEffect: false,
      }
    },
    mounted() {},
    methods: {
      handleCellClick() {
        if (this.bgEffect) {
          this.calBgEffect = true
        }
        setTimeout(() => {
          this.calBgEffect = false
        }, 500)
        this.$emit('click')
      },
    },
  }

</script>

<style lang="less" scoped>
  @import '../style/var.less';

  * {
    margin: 0;
    padding: 0;
  }

  /* 遮盖效果 */
  @keyframes fader {
    0% {
      width: 50%;
      height: 80%;
    }

    50% {
      width: 140%;
      height: 140%;
      border-radius: 40%;
    }

    100% {
      opacity: 0;
    }
  }

  .sun-cell {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 16px;
    // background-color: pink;
    box-sizing: border-box;
    color: #323233;
  }

  .sun-cell-title {
    width: 50%;
  }

  .sun-cell-effect {
    overflow: hidden;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      content: '';
      width: 0px;
      height: 0px;

      background-color: rgba(0, 0, 0, 0.2);
      animation: fader 0.5s;
    }
  }

  .sun-cell-value {
    text-align: right;
    width: 50%;
  }

  .sun-cell-value-slot {
    display: flex;
    justify-content: flex-end;
  }

  .sun-cell-border::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .sun-cell-label {
    margin: 0;
    font-size: 13px;
    color: @gray-7;
    margin-top: 6px;
  }

  .sun-cell-title {
    .sun-icon {
      margin-right: 4px;
    }
  }

</style>

<template>
  <div class="sun-nav-bar" :class="{'sun-nav-bar-border':border,'sun-nav-bar-fixed':fixed}" :style="{zIndex:zIndex}">

    <div v-if="$slots.left" class="sun-nav-bar-left" @click="handleLeftClick">
      <slot name="left"></slot>
    </div>
    <div v-else class="sun-nav-bar-left" @click="handleLeftClick">
      <i v-if="leftArrow" class="sun-icon sun-icon-arrow-left"></i>
      <span>{{leftText}}</span>
    </div>

    <div v-if="$slots.title" class="sun-nav-bar-center sun-ellipsis">
      <slot name="title"></slot>
    </div>
    <div v-else class="sun-nav-bar-center sun-ellipsis">{{title}}</div>

    <div v-if="$slots.right" class="sun-nav-bar-right" @click="handleRightClick">
      <slot name="right"></slot>
    </div>
    <div v-else class="sun-nav-bar-right" @click="handleRightClick">{{rightText}}</div>
  </div>
</template>

<script>
  export default {
    name: 'SunNavBar',
    props: {
      title: {
        type: String,
        default: ''
      },
      leftText: {
        type: String,
        default: ''
      },
      rightText: {
        type: String,
        default: ''
      },
      leftArrow: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: String | Number,
        default: 1
      }
    },
    mounted() {
      console.log(this.$slots)
    },
    methods: {
      handleLeftClick() {
        this.$emit('left-click')
      },
      handleRightClick() {
        this.$emit('right-click')
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-nav-bar {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 49px;
    top: 0;
    left: 0;
  }

  .sun-nav-bar-border {
    border-bottom: 1px solid #ebedf0;
  }

  .sun-nav-bar-center {
    flex: 1;
    text-align: center;
    color: #000;

    span {
      font-size: 16px;
      font-weight: 700;
    }
  }

  .sun-nav-bar-left,
  .sun-nav-bar-right {
    padding: 0 16px;
  }

  .sun-nav-bar-left {
    .sun-icon-left {
      font-size: 15px;
      margin-right: 6px;
    }
  }

  .sun-nav-bar-fixed {
    position: fixed;
  }

</style>

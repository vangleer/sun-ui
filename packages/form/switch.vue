<template>
  <div class="sun-switch" :class="{'sun-switch-on':value,'sun-switch-disabled':disabled}"
    :style="{fontSize:$calSize(size),backgroundColor:CalBgColor}" @click="handleChange">
    <div class="sun-switch-node">
      <i class="sun-icon" :class="{'sun-icon-loading':loading}" :style="{color:CalBgColor}"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunSwitch',
    props: {
      value: { // v-model传递过来的值
        type: Boolean,
      },
      disabled: { // 是否是 disabled
        type: Boolean,
      },
      size: { // 大小
        type: String | Number,
      },
      loading: { // 是否是加载状态
        type: Boolean,
        default: false,
      },
      activeColor: { // 选中的颜色
        type: String,
      },
      inactiveColor: { // 未选中的颜色
        type: String,
      },
    },
    watch: {
      value(newVal) { // 监听value改变触发change事件
        this.$emit('change', newVal)
      },
    },
    computed: {
      /**
       * 计算背景颜色
       *    1.如果value为true就使用activeColor颜色
       *    2.如果为false就使用inactiveColor颜色
       */
      CalBgColor() {
        return this.value ? this.activeColor : this.inactiveColor
      },
    },
    methods: {
      // 点击的时候触发事件
      handleChange(e) {
        // 如果是disabled就直接返回
        if (this.disabled) return
        /**
         * 因为switch只有true和false两种状态
         * 所以每次点击取反原来的值就行
         */
        const model = !this.value
        // 触发input事件，传递取反后的值
        this.$emit('input', model)
        // 触发click事件方便注册为switch组件注册click事件再把事件对象传递过去
        this.$emit('click', e)
      },
    },
  }

</script>

<style lang="less" scoped>
  // loading动画
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  // switch样式
  .sun-switch {
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    width: 2em;
    height: 1em;
    font-size: 30px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  // 内部圆按钮样式
  .sun-switch-node {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 1em;
    height: 1em;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
      0 3px 3px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05),
      -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);

    .sun-icon-loading {
      animation: rotate 2s infinite linear;
      font-size: 0.6em;
    }
  }

  // 选中样式
  .sun-switch-on {
    background-color: #1989fa;

    .sun-switch-node {
      transform: translateX(1em);

      .sun-icon-loading {
        animation: rotate 2s infinite linear;
        color: #1989fa;
      }
    }
  }

  .sun-switch-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

</style>

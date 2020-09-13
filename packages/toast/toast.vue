<template>
  <transition name="sun">
    <div
      @click="handleToastClick"
      v-show="isShow"
      class="sun-toast"
      :class="['sun-toast-'+position,className]"
    >
      <div
        v-if="type==='success'"
        class="sun-toast-success"
        :class="['sun-icon',!icon?'sun-icon-donw':'sun-icon-'+icon]"
      ></div>
      <div
        v-if="type==='fail'"
        class="sun-toast-fail"
        :class="['sun-icon',!icon?'sun-icon-gantanhao':'sun-icon-'+icon]"
      ></div>
      <div
        v-if="type==='loading'"
        class="sun-toast-loading"
        :class="['sun-icon',!icon?'sun-icon-up':'sun-icon-'+icon,isShow?'sun-toast-loading-rotate':'']"
      ></div>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'SunToast',
  data() {
    return {
      once: false,
      isShow: false,
      type: 'text',
      icon: '',
      position: 'center',
      message: '',
      iconPrefix: 'sun-icon',
      overlay: false,
      closeOnClick: false,
      className: 'sun-toast',
      duration: 1500,
      styleObj: { opacity: 0.5 },
    }
  },
  created() {
    this.handleShow()
  },
  methods: {
    // 点击事件
    handleToastClick() {
      if (this.closeOnClick) {
        this.isShow = false
      }
      this.$emit('click')
    },
    handleShow() {
      // 创建实例修改isShow
      this.isShow = true
      // 完全展示触发onOpened
      setTimeout(() => {
        this.onOpened && this.onOpened()
      }, 300)
      console.log(document.querySelector('body'))
      if (this.overlay) {
        document.body.classList.add('sun-overlay')
      }
      // 修改opacity
      setTimeout(() => {
        this.isShow = false
        if (this.overlay) document.body.classList.remove('sun-overlay')
        // 当关闭后触发onClose函数
        this.onClose && this.onClose()
      }, this.duration)
      console.log('创建了')
    },
    success() {
      console.log('成功了')
    },
    fail() {},
    clear() {},
    loading() {},
  },
}
</script>

<style lang="less" scoped>
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.sun-toast {
  position: absolute;
  z-index: 2020;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  max-width: 80%;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
  span {
    color: #fff;
  }

  // 成功图标样式
  .sun-toast-success,
  .sun-toast-fail,
  .sun-toast-loading {
    text-align: center;
    display: block;
    font-size: 50px;
    font-weight: 700;
  }
  .sun-toast-loading-rotate {
    animation: loading 1s linear infinite;
  }
}

.sun-toast.sun-toast-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.sun-toast.sun-toast-top {
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.sun-toast.sun-toast-bottom {
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
}

// 默认显示
.sun-enter-active,
.sun-leave-active {
  transition: opacity 0.4s;
}
.sun-enter, .sun-leave-to /* .sun-leave-active below version 2.1.8 */ {
  transition: opacity 0.4s;
  opacity: 0;
}
</style>
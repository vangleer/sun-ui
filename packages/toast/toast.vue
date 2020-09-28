<template>
  <transition :name="'sun-'+position">
    <div @click="handleToastClick" v-show="isShow" :style="{padding:isPadding?'20px':'8px 16px'}" class="sun-toast"
      :class="['sun-toast-'+position,className]">
      <div v-if="type==='success'" class="sun-toast-success"
        :class="['sun-icon',!icon?'sun-icon-success':'sun-icon-'+icon]"></div>
      <div v-if="type==='fail'" class="sun-toast-fail" :class="['sun-icon',!icon?'sun-icon-warning':'sun-icon-'+icon]">
      </div>
      <div v-if="type==='loading'" class="sun-toast-loading"
        :class="['sun-icon',!icon?'sun-icon-loading':'sun-icon-'+icon,isShow?'sun-toast-loading-rotate':'']"></div>
      <div v-if="type==='text'&&!isImg&&!!icon" class="sun-icon" :class="{['sun-icon-'+icon]:!!icon}"></div>
      <img v-if="isImg" class="sun-icon sun-icon-img" :src="icon" alt="">
      <span v-html="message"></span>
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
        styleObj: {
          opacity: 0.5
        },
      }
    },
    computed: {
      isImg() {
        return /\.|\//.test(this.icon)
      },
      isPadding() {
        return !!this.icon || this.type !== 'text'
      }
    },
    created() {
      this.handleShow()
      console.log(this.message)
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
      clear() {
        let toasts = Array.from(document.querySelectorAll('.sun-toast'))
        toasts.forEach(item => document.body.removeChild(item))
      },
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
    padding: 8px 16px;
    cursor: pointer;
    text-align: center;
    min-width: 96px;

    span {
      color: #fff;
    }

    .sun-icon {
      text-align: center;
      display: block;
      font-size: 34px;
      margin-bottom: 16px;
    }

    // 成功图标样式
    .sun-toast-success,
    .sun-toast-fail,
    .sun-toast-loading {
      text-align: center;
      display: block;
      font-size: 34px;
      margin-bottom: 16px;
    }

    .sun-toast-loading-rotate {
      animation: loading 1s linear infinite;
    }
  }

  .sun-toast-center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -66%);
  }

  .sun-toast-top {
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  .sun-toast-bottom {
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  // 默认显示
  .sun-center-enter-active,
  .sun-center-leave-active {
    transition: all 0.3s;
  }

  .sun-center-enter,
  .sun-center-leave-to {
    opacity: 0;
    margin-top: -13px;
  }

  // 上
  .sun-top-leave-active,
  .sun-top-enter-active {
    transition: transform 0.2s;
  }

  .sun-top-enter,
  .sun-top-leave-to {
    transform: translate(-50%, -100%);
  }

  // 下
  .sun-bottom-leave-active,
  .sun-bottom-enter-active {
    transition: transform 0.2s;
  }

  .sun-bottom-enter,
  .sun-bottom-leave-to {
    transform: translate(-50%, 100%);
  }

  .sun-icon-img {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

</style>

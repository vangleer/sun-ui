<template>
  <div class="sun-message">
    <transition :name="'sun-message-'+position">
      <span class="sun-message-text" v-show="show"
        :class="{['sun-message-text-border-'+icon]:border,['sun-message-text-'+position]:!!position}">
        <div><i v-show="!!icon" class="sun-icon" :class="[!!icon?'sun-icon-'+icon:'']"></i>{{message}}</div>
      </span>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'SunMessage',
    data() {
      return {
        show: false,
        message: '提示',
        duration: 1500,
        icon: '',
        border: false,
        position: 'top'
      }
    },
    mounted() {
      this.show = true
      setTimeout(() => {
        // 定时关闭
        this.show = false
        // 关闭调用方法
        this.onClose && this.onClose()
      }, this.duration + 500)
    },
    methods: {
      handleClick() {
        this.show = !this.value
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../style/var.less";

  @keyframes roate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  // 上显示--默认
  .sun-message-top-enter,
  .sun-message-top-leave-to {
    // opacity: 0;
    transform: translateY(-100%);
  }

  .sun-message-top-enter-active,
  .sun-message-top-leave-active {
    transition: transform 0.2s;
  }

  // 中间显示
  .sun-message-center-enter,
  .sun-message-center-leave-to {
    opacity: 0;
    margin-top: -13px;
  }

  .sun-message-center-enter-active,
  .sun-message-center-leave-active {
    transition: all 0.3s;
  }

  // 下显示
  .sun-message-bottom-enter,
  .sun-message-bottom-leave-to {
    transform: translateY(100%);
  }

  .sun-message-bottom-enter-active,
  .sun-message-bottom-leave-active {
    transition: transform 0.2s;
  }

  .sun-message-text {
    box-sizing: border-box;
    position: fixed;
    display: flex;
    align-items: center;
    margin-left: -40%;
    max-width: 80%;
    min-width: 80%;
    padding: 10px 20px;
    width: 50%;
    min-height: 46px;
    color: rgba(0, 0, 0, .85);
    background-color: #fff;
    z-index: 2020;
    box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.1);

    .sun-icon {
      margin-right: 5px;
      font-size: 18px;
    }

    .sun-icon-success {
      color: @green;
    }

    .sun-icon-error {
      color: @red;
    }

    .sun-icon-info {
      color: @blue;
    }

    .sun-icon-warning {
      color: @orange;
    }

    .sun-icon-loading {
      display: inline-block;
      overflow: hidden;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: roate 1s linear infinite;
      color: @loading;
    }
  }

  .sun-message-text-top {
    top: 12px;
    left: 50%;
  }

  .sun-message-text-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sun-message-text-bottom {
    bottom: 12px;
    left: 50%;
  }

  .sun-message-text-border-success {
    border: 1px solid @green;
    border-radius: 4px;
  }

  .sun-message-text-border-error {
    border: 1px solid @red;
    border-radius: 4px;
  }

  .sun-message-text-border-info {
    border: 1px solid @blue;
    border-radius: 4px;
  }

  .sun-message-text-border-warning {
    border: 1px solid @orange;
    border-radius: 4px;
  }

  .sun-message-text-border-loading {
    border: 1px solid @loading;
    border-radius: 4px;
  }

</style>

<template>
  <div class="sun-message" @click="handleClick">
    <transition :name="'sun-message-' + position">
      <span class="sun-message-text" v-show="show" :class="{
          ['sun-message-text-border-' + type]: border,
          ['sun-message-text-' + position]: !!position
        }" :style="{borderColor:color}">
        <div :class="{'sun-message-success':type==='',['sun-message-'+type]:type}" :style="{color:color}">
          <i v-if="!icon&&!type" class="sun-icon sun-icon-success-f"></i>
          <i v-if="!icon&&type==='success'" class="sun-icon sun-icon-success-f"></i>
          <i v-if="!icon&&type==='error'" class="sun-icon sun-icon-cross-f"></i>
          <i v-if="!icon&&type==='info'" class="sun-icon sun-icon-info-f"></i>
          <i v-if="!icon&&type==='warning'" class="sun-icon sun-icon-warning-o"></i>
          <i v-if="!icon&&type==='loading'" class="sun-icon sun-icon-loading"></i>
          <i v-if="!!icon" class="sun-icon" :class="['sun-icon-'+icon]" :style="{color:color}"></i>
          {{ message }}
        </div>
      </span>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "SunMessage",
    data() {
      return {
        show: false,
        message: "",
        duration: 1500,
        type: "",
        icon: '',
        border: false,
        position: "top",
        color: ''
      };
    },
    mounted() {
      this.show = true;
      this.onOpened && this.onOpened();
      setTimeout(() => {
        // 定时关闭
        this.show = false;
        // 关闭调用方法
        this.onClose && this.onClose();
      }, this.duration + 500);
    },
    methods: {
      handleClick() {
        this.onClick && this.onClick()
        // this.show = !this.show;
      },
      clear() {
        let messages = Array.from(document.querySelectorAll('.sun-message'))
        messages.forEach(item => document.body.removeChild(item))
      }
    }
  };

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
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    z-index: 2020;
    box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.1);

    .sun-icon {
      margin-right: 5px;
      font-size: 18px;
    }

    .sun-message-success {
      color: @green;
    }

    .sun-message-error {
      color: @red;
    }

    .sun-message-info {
      color: @blue;
    }

    .sun-message-warning {
      color: @orange;
    }

    .sun-message-loading {
      color: @loading;

      .sun-icon {
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: roate 1s linear infinite;
      }

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
    margin: 0;
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

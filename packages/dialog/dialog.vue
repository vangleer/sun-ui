<template>
   <component :is="tag">
      <div class="sun-overlay" :class="[overlayClass]" :style="overlayStyleOwn" @click="handleOverlayClick"></div>
      <transition name="sun">
      <div class="sun-dialog" :class="[className]"  v-show="isShow">
        <div class="sun-dialog-header">
          <slot name="title">{{title}}</slot>
        </div>
          <div class="sun-dialog-content">
            <slot></slot>
            <div v-if="!$slots.default" class="sun-dialog-message" :class="{'van-dialog-message-has-title':!!title,['sun-dialog-message-align-'+messageAlign]:messageAlign}">{{message}}</div>
          </div>
       
          <div class="sun-dialog-footer">
            <button 
              class="sun-dialog-cansel"
              :class="{'sun-dialog-cansel-round':theme==='round-button'}" 
              :style="{color:cancelButtonColor}" 
              v-if="showCancelButton"
              @click="handleCanselClick"
            >{{cancelButtonText}}</button>
            <button class="sun-dialog-confirm" v-if="showConfirmButton" :class="{'sun-dialog-confirm-round':theme==='round-button'}" @click="handleConfirmClick">{{confirmButtonText}}</button>
          </div>
      </div>
    </transition>
   </component>
</template>

<script>
import Button from '../button/Button'
export default {
  components:{'sun-button':Button},
  name:'SunDialog',
  props:{
    value:{
      type:Boolean,
      default:false
    },
    title:{
      type:String
    },
    width:{
      type:String,
    },
    className:{type:String},
    messageAlign:{
      type:String
    },
    message:{
      type:String
    },
    theme:{type:String},
    tag:{type:String,default:'div'},
    cancelButtonColor:{type:String,default:'black'},
    showConfirmButton:{type:Boolean,default:true},
    showCancelButton:{type:Boolean,default:false},
    confirmButtonText:{type:String,default:'确认'},
    cancelButtonText:{type:String,default:'取消'},
    overlay:{type:Boolean,default:true},
    overlayClass:{type:String,default:''},
    overlayStyle:{type:Object},
    closeOnClickOverlay:{type:Boolean,default:false}
  },
  
  data() {
    return {
      overlayStyleOwn:{}
    }
  },
  mounted() {
     if (!this.isShow) {
        this.overlayStyleOwn = {
          opacity: 0,
          display: 'none',
          transition: `opacity 0.2s`,
          ...this.overlayStyle,
        }
      }
  },
  watch: {
    isShow(newValue, oldValue) {
      if (newValue) {
        this.overlay&&this.setOverlayStyle(0.5, 'block')
        // 触发打开事件
        this.$emit('open')
      } else {
        this.overlay&&this.setOverlayStyle(0, 'none')
        // 触发关闭事件
        this.$emit('close')
      }
    },
  },
  computed:{
    isShow:{
      get() {
        return this.value||false
      },
      set(newValue) {
          this.$emit('input',newValue)
      },
    }
  },
  methods:{
    // 点击确定
    handleConfirmClick() {
      this.isShow = false
      this.$emit('confirm')
    },
    // 点击取消
    handleCanselClick() {
      this.isShow = false
      this.$emit('cancel')
    },
     // 点击遮罩层
      handleOverlayClick() {
        this.isShow = false
        this.$emit('click-overlay')
      },
      setOverlayStyle(opacity, dispaly) {
      this.overlayStyleOwn.opacity = opacity

      if (this.isShow) {
        this.overlayStyleOwn.display = dispaly
      } else {
        setTimeout(() => {
          this.overlayStyleOwn.display = dispaly
        }, this.duration * 1000)
      }
    },
  }
}
</script>

<style lang="less" scoped>
.sun-dialog {
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  background-color: #fff;
  border-radius: 16px;
  z-index: 2020;
  overflow: hidden;
}
.sun-dialog-header {
  padding-top: 26px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}
.sun-dialog-message {
    flex: 1;
    max-height: 60vh;
    padding: 26px 24px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    text-align: center;
    word-wrap: break-word;
}
.sun-dialog-message-align-left {
    text-align: left;
}
.sun-dialog-message-align-right {
    text-align: right;
}
.van-dialog-message-has-title {
    padding-top: 8px;
    color: #646566;
}
.sun-dialog-footer {
    display: flex;
    overflow: hidden;
}
.sun-dialog-confirm,
.sun-dialog-cansel {
    position: relative;
    flex: 1;
    height: 48px;
    margin: 0;
    border: 0;
    color: #323233;
    background-color: #fff;
   &:active {
    &::before {
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
  }
}
.sun-dialog-cansel-round {
  border-radius: 36px;
  height: 36px;
  background-color: #ee0a24;
  margin: 10px 20px;
  color: #fff;
}

.sun-dialog-confirm {
  color: #ee0a24;
}
.sun-dialog-confirm-round {
  border-radius: 36px;
  height: 36px;
  background-color: #07c160;
  color: #fff;
  margin: 10px 20px;
}
.sun-enter,
.sun-leave-to {
  transform: translate3d(-50%,-50%,0) scale(0.8);
  opacity: 0;
}
.sun-enter-active,
.sun-leave-active{
  transition: all 0.1s;
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
}
</style>
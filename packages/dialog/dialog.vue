<template>
    <transition name="sun">
      <div class="sun-dialog"  v-show="isShow"> 
        <div class="sun-dialog-header">{{title}}</div>
        <div class="sun-dialog-content">
          <div class="sun-dialog-message" :class="{'van-dialog-message-has-title':!!title}">{{message}}</div>
        </div>

        <div class="sun-dialog-footer"></div>
      </div>
    </transition>
</template>

<script>
export default {
  name:'SunDialog',
  props:{
    value:{
      type:Boolean,
      default:false
    },
    title:{
      type:String
    },
    message:{
      type:String
    }
  },
  
  data() {
    return {
      
    }
  },
  computed:{
    isShow:{
      get() {
        return this.value||false
      },
      set(val) {
        this.$emit('input',val)
      },
    }
  }
}
</script>

<style type="less" scoped>
.sun-dialog {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  height: 200px;
  background-color: pink;
  border-radius: 16px;

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
.van-dialog-message-has-title {
    padding-top: 8px;
    color: #646566;
}
.sun-enter,
.sun-leave-to {
  transform: translate3d(-50%,-50%,0) scale(0.5);
}
.sun-enter-active,
.sun-leave-active{
  transition: transform 0.1s;
}
</style>
<template>
  <button class="sun-btn" :class="['sun-btn-'+type]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
 
<script>
export default {
  name: 'SunButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="less">
.sun-btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border: 1px solid #d9d9d9;
}

.sun-btn:before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 1;
  display: none;
  background: #fff;
  border-radius: inherit;
  opacity: 0.35;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  content: '';
  pointer-events: none;
}

.sun-btn-primary {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.sun-btn-primary:focus,
.sun-btn-primary:hover {
  color: #fff;
  background: #40a9ff;
  border-color: #40a9ff;
}
</style>

<template>
  <div
    class="sun-switch"
    :class="{'sun-switch-on':value,'sun-switch-disabled':disabled}"
    @click="handleChange"
    :style="{fontSize:size,backgroundColor:CalBgColor}"
  >
    <div class="sun-switch-node">
      <i class="sun-icon sun-icon-loading" :style="{color:CalBgColor}"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SunSwitch',
  props: {
    value: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    size: {
      type: String | Number,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
    },
    inactiveColor: {
      type: String,
    },
  },
  watch: {
    value(newVal) {
      this.$emit('change', newVal)
    },
  },
  computed: {
    calSize() {
      if (/px|em|rem|%/.test(this.size)) {
        console.log(true)
        return this.size
      } else {
        console.log(false)
        return this.size + 'px'
      }
    },
    CalBgColor() {
      return this.value ? this.activeColor : this.inactiveColor
    },
  },
  mounted() {},
  methods: {
    handleChange(e) {
      if (this.disabled) return
      const model = !this.value
      this.$emit('input', model)
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="less" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
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
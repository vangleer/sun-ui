<template>
  <div class="sun-checkbox" @click="handleClick"
    :class="{'sun-checkbox-disabled':disabled,'sun-checkbox-reverse':labelPosition==='left'}">
    <div class="sun-checkbox-wrap" @click="handleCheckboxClick"
      :class="[value?'sun-checkbox-checked':'sun-checkbox-checked-no','sun-checkbox-icon-'+shape]">
      <i v-if="!$slots.icon" class="sun-icon sun-icon-success1"
        :style="{backgroundColor:value?checkedColor:'transparent'}"></i>
      <div v-else class="sun-icon" :style="{backgroundColor:value?checkedColor:'transparent'}">
        <slot name="icon"></slot>
      </div>
    </div>
    <span class="sun-checkbox-label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'SunCheckbox',
    props: {
      value: {
        type: Boolean
      },
      shape: {
        type: String,
        default: 'round'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      labelDisabled: {
        type: Boolean,
        default: false
      },
      labelPosition: {
        type: String,
        default: 'right'
      },
      iconSize: {
        type: String | Number,
        default: 20
      },
      checkedColor: {
        type: String
      },
      bindGroup: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      }
    },
    mounted() {},
    watch: {
      value(val) {
        this.$emit('change', val)
      }
    },
    methods: {
      handleClick() {
        if (this.disabled) return
        const isChecked = !this.value
        this.$emit('input', isChecked)
      },
      handleCheckboxClick() { // 点击复选框
        this.$emit('click')
      }
    }
  }

</script>

<style lang="less" scoped>
  div,
  i,
  span {
    box-sizing: border-box;
  }

  .sun-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .sun-checkbox-reverse {
    flex-direction: row-reverse;
  }

  .sun-checkbox-wrap {
    .sun-icon {
      font-size: 18px;
      transition-property: color, border-color, background-color;
      transition-duration: 0.2s;
      margin: 0 6px;
      color: transparent;
      border: 1px solid rgba(0, 0, 0, 0);
    }

    .sun-icon-success1 {
      color: #fff;
    }
  }

  .sun-checkbox-label {
    color: #323233;
    font-size: 15px;
  }

  .sun-checkbox-checked {
    .sun-icon {
      background-color: #1989fa;
    }
  }

  .sun-checkbox-checked-no {
    .sun-icon {
      color: transparent;
      border: 1px solid #ccc;
    }
  }

  .sun-checkbox-disabled {
    cursor: not-allowed;

    .sun-icon {
      background-color: #ebedf0;
      border-color: #c8c9cc;
      color: #c8c9cc;
    }

    .sun-checkbox-label {
      color: #c8c9cc;
    }

    .sun-checkbox-checked-no {
      .sun-icon {
        color: transparent;
      }
    }
  }

  .sun-checkbox-icon-round {
    .sun-icon {
      border-radius: 50%;
    }
  }

  .sun-checkbox-icon-square {
    .sun-icon {
      border-radius: 0;
    }
  }

</style>

<template>
  <div
    class="sun-checkbox"
    @click="handleClick"
    :class="{'sun-checkbox-disabled':isDisabled,'sun-checkbox-reverse':labelPosition==='left'}"
  >
    <div
      class="sun-checkbox-wrap"
      @click="handleCheckboxClick"
      :class="[isChecked?'sun-checkbox-checked':'sun-checkbox-checked-no','sun-checkbox-icon-'+shape]"
    >
      <i
        v-if="!$slots.icon"
        class="sun-icon sun-icon-success1"
        :style="{backgroundColor:isChecked?calCheckedColor:'transparent',size:calIconSize}"
      ></i>
      <div
        v-else
        class="sun-icon"
        :style="{backgroundColor:isChecked?calCheckedColor:'transparent'}"
      >
        <slot name="icon"></slot>
      </div>
    </div>
    <span class="sun-checkbox-label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SunCheckbox',
  inject: {
    checkboxGroup: {
      default: '',
    },
    isGroupDisabled: {
      default: false,
    },
  },
  props: {
    value: {
      type: Boolean,
    },
    shape: {
      type: String,
      default: 'round',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    labelDisabled: {
      type: Boolean,
      default: false,
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
    iconSize: {
      type: String | Number,
      default: 20,
    },
    checkedColor: {
      type: String,
    },
    bindGroup: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
  },
  mounted() {},
  computed: {
    isGroup() {
      return !!this.checkboxGroup
    },
    isDisabled() {
      return this.isGroupDisabled ? this.isGroupDisabled : this.disabled
    },
    calCheckedColor() {
      return !!this.checkboxGroup.checkedColor
        ? this.checkboxGroup.checkedColor
        : this.checkedColor
    },
    calIconSize() {
      return !!this.checkboxGroup.iconSize
        ? this.checkboxGroup.iconSize
        : this.iconSize
    },
    model: {
      get() {
        return this.isGroup ? this.checkboxGroup.value : this.value
      },
      set(newVal) {
        this.isGroup
          ? this.checkboxGroup.$emit('input', this.name)
          : this.$emit('input', newVal)
      },
    },
    isChecked() {
      // 如果是group包裹，判断name是否在model中
      // 如果没有group包裹，直接使用nodel
      return this.isGroup ? this.model.includes(this.name) : this.model
    },
  },
  watch: {
    value(val) {
      this.$emit('change', val)
    },
  },
  methods: {
    handleClick() {
      if (this.isDisabled) return
      const model = this.model
      if (
        model.length >= parseInt(this.checkboxGroup.max) &&
        parseInt(this.checkboxGroup.max) !== 0
      ) {
        return
      }
      let delIndex
      if (this.isGroup) {
        let res = model.some((item, index) => {
          if (item === this.name) {
            delIndex = index
            return true
          }
        })
        if (res) {
          model.splice(delIndex, 1)
        } else {
          model.push(this.name)
        }
        this.checkboxGroup.$emit('input', model)
      } else {
        this.$emit('input', !model)
      }
    },
    handleCheckboxClick() {
      // 点击复选框
      this.$emit('click')
    },
  },
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

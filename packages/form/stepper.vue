<template>
  <div class="sun-stepper" :class="{'sun-stepper-round':!!theme}">
    <button v-if="showMinus" class="sun-stepper-minus" :class="{'sun-stepper-minus-disabled':disabledMin}"
      @click="handleMinusClick" :style="buttonStyle">-</button>
    <input type="text" class="sun-stepper-input" v-model.number="model"
      :class="{'sun-stepper-input-disabled':disabledText}" :disabled="disabledText" :style="{width:calSize(inputWidth)}"
      @focus="$emit('focus')" @blur="$emit('blur')">
    <button v-if="showPlus" class="sun-stepper-plus" :class="{'sun-stepper-plus-disabled':disabledMax}"
      @click="handlePlusClick" :style="buttonStyle">+</button>
  </div>
</template>

<script>
  export default {
    name: 'SunStepper',
    props: {
      value: {

      },
      max: {
        type: Number | String,
        default: 10
      },
      min: {
        type: Number | String,
        default: 0
      },
      step: {
        type: Number | String,
        default: 1
      },
      disabled: {
        type: Boolean
      },
      disableInput: {
        type: Boolean
      },
      inputWidth: {
        type: String | Number
      },

      buttonSize: {
        type: String | Number
      },
      disablePlus: {
        type: String | Number
      },
      disableMinus: {
        type: Boolean
      },
      showPlus: {
        type: Boolean,
        default: true
      },
      showMinus: {
        type: Boolean,
        default: true
      },
      theme: {
        type: String
      }
    },
    computed: {
      disabledMin() {
        return parseInt(this.model) <= parseInt(this.min) || this.disabled || this.disableMinus
      },
      disabledMax() {
        return parseInt(this.model) >= parseInt(this.max) || this.disablePlus || this.disabled
      },
      disabledText() {
        return this.disabled || this.disableInput
      },
      model: {
        get() {
          return this.value
        },
        set(newVal) {
          this.$emit('input', newVal)
          this.$emit('change', newVal)
        }
      }
    },
    data() {
      return {
        buttonStyle: {}
      }
    },
    mounted() {
      console.log(this.disablePlus, this.disabledMax)
      if (!!this.buttonSize) {
        this.buttonStyle = {
          width: this.calSize(this.buttonSize),
          height: this.calSize(this.buttonSize)
        }
      }
    },
    methods: {
      handleMinusClick() {
        if (this.disabledMin) return this.$emit('overlimit')
        this.model -= parseInt(this.step)
        this.$emit('minus')
      },
      handlePlusClick() {
        if (this.disabledMax) return this.$emit('overlimit')
        this.model += parseInt(this.step)
        this.$emit('plus')
      },
      calSize(size) {
        return /px|em|rem|%/.test(size) ? size : size + 'px'
      },
    }
  }

</script>

<style lang="less" scoped>
  .sun-stepper {
    font-size: 0;
  }

  .sun-stepper-round {

    .sun-stepper-minus,
    .sun-stepper-plus {
      border-radius: 50%;
      background-color: transparent;
    }

    .sun-stepper-plus {
      background-color: red;
      color: #fff;
    }

    .sun-stepper-minus {
      border: 1px solid red;
      color: red;
    }

    .sun-stepper-input {
      border: 0;
      background-color: transparent;
    }
  }

  .sun-stepper-minus,
  .sun-stepper-plus {
    position: relative;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    color: #323233;
    vertical-align: middle;
    border: 0;
    cursor: pointer;

    &:active {
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-color: currentColor;
        opacity: 0.1;
        border-radius: inherit;
      }
    }
  }

  .sun-stepper-minus {
    border-radius: 4px 0 0 4px;
  }

  .sun-stepper-plus {
    border-radius: 0 4px 4px 0;
  }

  .sun-stepper-input {
    box-sizing: border-box;
    width: 32px;
    height: 28px;
    margin: 0 2px;
    padding: 0;
    color: #323233;
    font-size: 14px;
    line-height: normal;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;
  }

  .sun-stepper-minus-disabled,
  .sun-stepper-plus-disabled {
    color: #c8c9cc;
    background-color: #f7f8fa;
    cursor: not-allowed;
  }

  .sun-stepper-minus::before,
  .sun-stepper-plus::before {
    width: 50%;
    height: 1px;
  }

  .sun-stepper-input-disabled {
    color: #c8c9cc;
    background-color: #f7f8fa;
    cursor: not-allowed;
  }

</style>

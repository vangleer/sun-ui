<template>
  <div class="sun-input" :class="{'sun-input-disabled':disabled,'sun-input-border':border}" @click="handleClick">
    <div class="sun-input-label" :class="[!!errorTip?'sun-input-label-error':'',labelAlign?'sun-input-label-'+labelAlign:'']" :style="{width:$calSize(labelWidth)}">
     
      <div  v-if="leftIcon&&!$slots['left-icon']" class="sun-input-left-icon" @click="handleLeftClick">
         <i class="sun-icon" :class="['sun-icon-'+leftIcon]"></i>
      </div>
       <div  v-if="$slots['left-icon']" class="sun-input-left-icon" @click="handleLeftClick">
         <slot name="left-icon"></slot>
      </div>
       
      <slot name="label">
        <span>{{label}}</span>
      </slot>
    </div>
    <div class="sun-input-body">
     <slot name="input">
        <input v-if="!readonly&&!disabled"
            class="sun-input-control" 
            :class="[!!errorTip?'sun-input-control-error':'']"
            :type="type" 
            :value="inputValue" 
            :placeholder="errorTip||placeholder?placeholder:'请输入'+label"
            :style="{textAlign:inputAlign}" 
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"
            @click="handleInputClick"
            ref="inputRef"
      > 
      <input v-if="readonly" readonly="readonly" class="sun-input-control" :type="type" :value="inputValue" @input="handleInput" :placeholder="placeholder"> 
      <input v-if="disabled" disabled="disabled" class="sun-input-control" :type="type" :value="inputValue" @input="handleInput" :placeholder="placeholder"> 
       <div class="sun-input-right-icon" v-if="!$slots['right-icon']&&rightIcon" @click="handleRightClick">
          <i class="sun-icon" :class="['sun-icon-'+rightIcon]"></i>
       </div>
       <div class="sun-input-right-icon" v-if="$slots['right-icon']" @click="handleRightClick">
         <slot name="right-icon"></slot>
       </div>

        <div class="sun-input-clear" v-if="clearable" @click="handleClearClick">
          <i v-show="showClear" class="sun-icon sun-icon-cross-f"></i>
       </div>
     </slot>
    </div>
   
  </div>
</template>

<script>
export default {
  name:'SunInput',
  props:{
    value:{
      type:String|Number|Boolean
    },
    label:{
      type:String
    },
    border:{type:Boolean,default:true},
    placeholder:{type:String},
    type:{type:String},
    readonly:{type:Boolean},
    disabled :{type:Boolean},
    leftIcon:{type:String},
    rightIcon:{type:String},
    clearable:{type:Boolean},
    required:{type:Boolean},
    errorMessage:{type:String},
    labelWidth:{
      type:String|Number
    },
    labelAlign:{
      type:String
    },
    inputAlign:{type:String}
  },
  computed:{
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input',val)
      }
    },
    showClear: {
      get() {
        return !!this.value&&this.clearable
      },
    },

  },
  data() {
    return {
      errorTip:'',
    }
  },
  mounted() {
    this.verifyRequire()
  },
  methods:{
    handleInput(e) {
      this.inputValue = e.target.value
      if(e.target.value.toString().trim().length>0) {
        this.errorTip = ''
      }
    },
    handleClick(e) {this.$emit('click',e)},
    handleInputClick(e) {this.$emit('click-input',e)},
    handleLeftClick(e) {this.$emit('click-left-icon',e)},
    handleRightClick(e) {this.$emit('click-right-icon',e)},
    handleBlur(e) {
      this.verifyRequire()
      this.$emit('blur',e)
    },
    handleClearClick() {
      this.inputValue = ''
      this.$emit('clear',e)
    },
    handleFocus(e) {
      this.$emit('focus',e)
    },
    focus() {
      this.$refs.inputRef.focus()
    },
    blur() {
      this.$refs.inputRef.blur()
    },
    verifyRequire() {
      if(this.inputValue.toString().trim().length<1&&this.required) {
        if(this.errorMessage) {
           this.errorTip = this.errorMessage
        }else {
            this.errorTip = '请输入'+this.label
        }
      //  this.inputValue = this.errorTip
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sun-input {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
}
.sun-input-control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    &::placeholder {
      color: #d2d2d3;
    }
}
.sun-input-body {
    display: flex;
    width: 100%;
    align-items: center;
}
.sun-input-label {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 6.2em;
    margin-right: 12px;
    color: #646566;
    text-align: left;
    word-wrap: break-word;
    align-items: center;
}
.sun-input-label-center {
  justify-content: center;
}
.sun-input-label-right {justify-content: flex-end;}
.sun-input-left-icon {
  margin-right: 6px;
}
.sun-input-right-icon {
  padding-left: 8px;
}

.sun-input-disabled {
  .sun-input-label {
    span {
      color: #d2d2d3;
    }
  }
  .sun-input-control {
    color: #d2d2d3;
  }
}
.sun-input-clear {
  color: #646566;
  .sun-icon {
    font-size: 16px;
  }
}
.sun-input-control-error {
  
  &::placeholder {
    color: #ee0a24;
  }
}
.sun-input-border {
    &:after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 16px;
      bottom: 0;
      left: 16px;
      border-bottom: 1px solid #ebedf0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
  }
}
.sun-input-label-error:after {
  content: '*';
  position: absolute;
  top: 0;
  left: -8px;
  color: #ee0a24;
  font-size: 18px;
}
</style>
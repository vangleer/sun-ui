<template>
  <div :class="[bem()]">
    <div :class="[isExpended?'border':'',disabled?'disabled':'',bem('title')]" @click="handleTitleClick">
      <span :class="[titleClass,bem('title-text')]">
        <slot name="title">
           <i v-if="!!icon" class="sun-icon" :class="['sun-icon-'+icon]"></i>
          {{title}}
        </slot>
      </span>
      
      <div :class="[valueClass,bem('title-right')]">
         <slot name="value"><span>{{value}}</span></slot>
         <slot name="right-icon">
           <i v-if="isLink" class="sun-icon sun-icon-arrow-down" :style="{transform:isExpended?'rotate(-180deg)':'rotate(0deg)'}"></i>
         </slot>
      </div>
    </div>
         <div :class="[bem('wrapper')]" :style="{height:height+'px'}">
          <div :class="[bem('content')]"  ref="wrapRef">
            <slot></slot>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'SunCollapseItem',
  inject:['parentCollapse'],
  props:{
    title:{
      type:String|Number
    },
    name:{
      type:String|Number
    },
    value:{type:String|Number},
    isLink:{type:Boolean,default:true},
    disabled:{type:Boolean},
    titleClass:{type:String},
    valueClass:{type:String},
    icon:{type:String},
  },
  computed: {
    isExpended() {
      let parentArr = this.parentCollapse.value 
      let names = parentArr.push?[...parentArr]:[parentArr]
      const flag = names.indexOf(this.name)!==-1
      if (flag) {
        setTimeout(()=>{
          this.height = this.$refs.wrapRef.offsetHeight
        },0)
      } else {
        this.height = 0
      }
      return flag
    }
  },
  data() {
    return {
      height:0
    }
  },
  methods:{
    bem(val) {
      return !!val ? 'sun-collapse-item-'+val:'sun-collapse-item'
    },
    handleTitleClick() {
      if(this.disabled) return
      let parentArr = this.parentCollapse.value 
      let names = parentArr.push?[...parentArr]:[parentArr]
      let isAccordion = this.parentCollapse.accordion
      if(!this.isExpended) {
        isAccordion?names=[this.name]:names.push(this.name)
      } else {
        if(isAccordion) {
          if(this.parentCollapse.value==this.name) {
            names = [-1]
          }else {
            names = []
          }
        } else {
          names = this.parentCollapse.value.filter(item=>item!==this.name)
        }
      }
      if(isAccordion) {
         this.parentCollapse.$emit('input',names[0])
         this.parentCollapse.$emit('change',names[0])
      }else {
        this.parentCollapse.$emit('input',names)
        this.parentCollapse.$emit('change',names)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sun-collapse-item {
  position: relative;
}
.sun-collapse-item-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: #fff;
  
}
.sun-collapse-item-title-text {
  display: flex;
  align-items: center;
  .sun-icon {
    margin-right: 5px;
  }
}
.sun-collapse-item-wrapper {
  padding: 0px 16px;
  height: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  color: #969799;
  transition: height 0.2s ease-in;
  overflow: hidden;
}
.sun-collapse-item-content {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.sun-collapse-item-title-right {
  display: flex;
  align-items: center;
  color: #969799;
  .sun-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    transition: transform 0.3s;
    margin-left: 5px;
  }
}
.border {
  border-bottom: 1px solid #eee;
}
.disabled {
  color: #c8c9cc;
  cursor: not-allowed;
  .sun-collapse-item-title-right {
    color: #c8c9cc;
  }
}
</style>
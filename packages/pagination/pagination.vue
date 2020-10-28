<template>
  <div class="sun-pagination">
    <span class="sun-pagination-item sun-pagination-item-prev" :class="{'sun-pagination-item-disabled':prevState}" @click="handlePrevClick">上一页</span>
    <span v-if="mode==='simple'" class="sun-pagination-item" ></span>
    <span  class="sun-pagination-item" 
          :class="{'sun-pagination-item-active':value==item}" 
          v-for="item in pageCount" :key="item"
          @click="handleItenClick(item)"

    >
      {{item}}
    </span>
    <span class="sun-pagination-item sun-pagination-item-next" :class="{'sun-pagination-item-disabled':nextState}" @click="handleNextClick">下一页</span>
  </div>
</template>

<script>
export default {
  name:'SunPagination',
  props:{
    value:{type:String|Number},
    totalItems:{type:String|Number,default:0},
    itemsPerPage:{type:String|Number,default:10},
    mode:{type:String} // multi simple 
  },
  data() {
    return {
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems/this.itemsPerPage)
    },
    prevState() {
      return this.value<=1
    },
    nextState() {
      return this.value>=this.pageCount
    }
  },
  methods:{
    handleItenClick(currentPage) {
      this.$emit('input',currentPage)
    },
    handlePrevClick() {
      if(this.prevState) return
      this.$emit('input',this.value-1)
    },
    handleNextClick() {
      if(this.nextState) return
      this.$emit('input',this.value+1)
    }
  }
}
</script>

<style lang="less" scoped>
.sun-pagination {
  display: flex;
  width: 100%;
}
.sun-pagination-item {
    position: relative;
    flex: 1;
    box-sizing: border-box;
    min-width: 36px;
    height: 40px;
    color: #1989fa;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      width: 1px;
      height: 100%;
      background-color: #ebedf0;
      transform: scaleX(0.5);
    }
}
.sun-pagination-item-active {
  background-color: #1989fa;
  color: #fff;
}
.sun-pagination-item-prev,
.sun-pagination-item-next {
    flex: 2;
    padding: 0 4px;
    cursor: pointer;
    &:active {
      background-color: #1989fa;
      color: #fff;
    }
}
.sun-pagination-item-next:after {
  display: none;
}
.sun-pagination-item-disabled {
    color: #646566;
    background-color: #f7f8fa;
    cursor: not-allowed;
    opacity: 0.5;
    &:active {
      color: #646566;
      background-color: #f7f8fa;
    }
}
    
</style>
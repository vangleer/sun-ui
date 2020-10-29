<template>
  <div :class="bem()">
    <span :class="[bem('item'),bem('item-prev'),prevState?bem('item-disabled'):'']" 
          @click="handleSelect(value-1)"
    >
      <slot name="prev-text">
        {{prevText}}
      </slot>
    </span>
    
    <span v-if="mode==='simple'" :class="[bem('item'),bem('item-simple')]" >
      {{value}}/{{count}}
    </span>
    <template v-else>
            <span 
                :class="[bem('item'),item.active?bem('item-active'):'']" 
                v-for="(item,index) in pages" :key="index"
                @click="handleSelect(item.number)"
            >
              <slot name="page" v-bind="item">{{item.text}}</slot>
            </span>
    </template>
    
    <span :class="[bem('item'),bem('item-next'),nextState?bem('item-disabled'):'']" 
          @click="handleSelect(value+1)"
    >
      <slot name="next-text">{{nextText}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name:'SunPagination',
  props:{
    value:{type:String|Number},
    totalItems:{type:String|Number,default:0},
    itemsPerPage:{type:String|Number,default:10},
    pageCount:{type:String|Number},
    mode:{type:String,default:'multi'}, // multi simple 
    forceEllipses:{type:Boolean},
    showPageSize:{type:String|Number,default:5},
    prevText:{type:String,default:'上一页'},
    nextText:{type:String,default:'下一页'},

  },
  computed: {
    count() {
       const count = parseInt(this.pageCount) || Math.ceil(this.totalItems/this.itemsPerPage)
       return Math.max(1, count);
    },
    pages() {
      const pages = [];
      const pageCount = this.count;
      const showPageSize = +this.showPageSize;
      if (this.mode !== 'multi') {
        return pages;
      }

       // Default page limits
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = showPageSize < pageCount;
       // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize-1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      }
      console.log(startPage,endPage)
       // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        const page = this.makePage(number, number, number === this.value);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          const previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          const nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    },
    prevState() {
      return this.value<=1
    },
    nextState() {
      return this.value>=this.count
    },
  },
  methods:{
    handleSelect(page,emitChange=true) {
      page = Math.min(this.count, Math.max(1, page));
       if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    },
    makePage(number, text, active) {
      return { number, text, active };
    },
    bem(val) {
      return !!val ? 'sun-pagination-'+val:'sun-pagination'
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

.sun-pagination-item-simple {
  flex: 2;
  background-color: transparent;
  color: #646566;
}
    
</style>
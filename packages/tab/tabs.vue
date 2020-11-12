<template>
  <div class="sun-tabs" ref="sunTabs">
    <div class="sun-tabs-nav-wrap" ref="tabWrap">
        <slot></slot>
    </div>
      <!-- 线条 -->
      <div class="sun-tabs-line" :style="{ width: lineWidth, ...lineStyle }"></div>
  </div>
</template>

<script>
  export default {
    name: 'SunTabs',
    provide() {
      return {
        tabs:this
      }
    },
    props: {
      value:{
        type:String|Number,
        default:0
      },
      lineWidth: {
        type: String | Number,
        default: '40px'
      },
      duration: {
        type: String | Number,
        default: "0.2"
      }
    },
    data() {
      return {
        tabList: [],
        totalW: 0,
        singleW: 0,
        translateX: 0,
        current: 0,
        lineStyle: {
          transform: "none",
          transition: 'none'
        }
      }
    },
    mounted() {
      this.handleInit()
    },
    methods: {
      handleAddEvent() {
        let tabList = this.$refs.tabWrap.children
        tabList.forEach((item, index) => {
          item.addEventListener('click', (e) => {
            this.current = index
            this.handleCalTranslate()
          })
        })
      },
      handleInit() {
        // 获取wrap的宽度
        this.totalW = this.$refs.tabWrap.offsetWidth;
        // 计算单个tab1的宽度
        this.singleW = this.totalW / this.$refs.tabWrap.children.length;
        console.log(this.totalW);
        console.log(this.singleW);
        this.handleCalTranslate();
        setTimeout(() => {
          this.lineStyle.transition = `transform ${this.duration}s`;
        }, this.duration * 1000);
        this.handleAddEvent()
      },
      handleCalTranslate() {
        this.translateX =
          this.singleW * this.current +
          this.singleW / 2 -
          parseInt(this.lineWidth) / 2;
        console.log(this.translateX)
        this.lineStyle.transform = `translateX(${this.translateX}px)`;

      },
    }
  }

</script>

<style lang="less" scoped>
  .sun-tabs {
    position: relative;
  }

  .sun-tabs-nav {
    width: 100%;
  }

  .sun-tabs-nav-wrap {
    position: relative;
    display: flex;
    background-color: #fff;
    height: 44px;
  }

  .sun-tabs-line {
    position: absolute;
    height: 3px;
    background-color: #ee0a24;
    bottom: 0;
    border-radius: 3px;
  }
 .sun-tab-item {
    flex: 1;
    display: flex;
    line-height: 20px;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
}
.sun-tab-pane {
  color: red;
}
</style>

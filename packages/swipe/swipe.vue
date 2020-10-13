<template>
  <div ref="swipe" class="sun-swipe" :style="{width:width&&parseInt(width)+'px',height:height&&parseInt(height)+'px'}">
    <div ref="swipeTrack" @transitionend="handleTransitionend"
      :class="[vertical?'sun-swipe-track-vertical':'sun-swipe-track']" :style="styleObj" @touchstart="handleTouchStart"
      @touchmove="handleTouchmove" @touchend="handleTouchend" @mousedown="handleTouchStart" @mousemove="handleTouchmove" @mouseup="handleTouchend">
      <slot></slot>
    </div>

    <!-- 指示器插槽 -->
    <slot name="indicator"></slot>
    <div class="sun-swipe-indicators" :class="{'sun-swipe-indicators-vertical':vertical}"
      v-if="showIndicators&&!this.$slots.indicator">
      <span class="sun-swipe-indicator"
        :class="[i===index?'sun-swipe-indicator-active':'',squareIndicators?'sun-swipe-indicator-square':'']"
        v-for="(item,i) in count" :key="item"
        :style="{backgroundColor:i===index?indicatorActiveColor:indicatorColor}"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunSwipe',
    props: {
      width: {
        type: String | Number,
      },
      height: {
        type: String | Number,
      },
      duration: { // 轮播过渡时间
        type: Number,
        default: 200
      },
      showIndicators: { // 是否显示指示器
        type: Boolean,
        default: true
      },
      autoplay: { // 自动播放的间隔时间
        type: String | Number
      },
      vertical: { // 是否垂直滑动，默认false
        type: Boolean,
        default: false
      },
      initialSwipe: { // 初始索引
        type: String | Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: true
      },
      indicatorColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.1)'
      },
      indicatorActiveColor: {
        type: String,
        default: '#fff'
      },
      squareIndicators: {
        type: Boolean
      },
      touchable: {
        type: Boolean,
        default: true
      },
      stopPropagation: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        current: 0,
        index: 0,
        distance: 0,
        start: 0,
        w: 0,
        totalW: 0,
        timer: null,
        totalCount: 0,
        count: 0,
        translate: 'translate',
        isStart:false,
        styleObj: {
          transform: 'translateX(0px)',
          transition: 'none'
        }
      }

    },
    mounted() {
      // 初始索引
      this.index = parseInt(this.initialSwipe)
      let childList = this.$refs.swipeTrack.children
      // 获取宽度或高度
      this.w = this.vertical ? this.$refs.swipe.offsetHeight : this.$refs.swipe.offsetWidth
      console.log(childList[0].offsetHeight)
      // 得到轮播图的个数
      this.count = childList.length
      // 获取track的总宽度或高度
      this.totalW = this.w * this.count
      // 判断是translateY还是translateX
      this.translate = this.vertical ? this.translate + 'Y' : this.translate + 'X'
      console.log('yes')
      // 拷贝第一张和最后一张

      let firstNode = childList[0].cloneNode(true)
      let lastNode = childList[this.count - 1].cloneNode(true)

      this.$refs.swipeTrack.appendChild(firstNode)
      this.$refs.swipeTrack.insertBefore(lastNode, childList[0])

      this.totalCount = childList.length
      // 是否autoPlay
      this.handleAutoplay()
      // 设置到当前索引的位置
      this.setTranslate()
      console.log(this.totalCount)

      document.addEventListener('click', (e) => {
        e.stopPropagation()
      })

      setTimeout(()=>{
        document.addEventListener('mouseup',()=>{
          this.handleTouchend()
        }) 
        document.addEventListener('touchend',()=>{
          this.handleTouchend()
        }) 
      },1000)
    },
    methods: {
      // 自动播放方法
      handleAutoplay() {

        if (!!this.autoplay) {
          this.timer = setInterval(() => {
            this.index++
            this.move()
          }, parseInt(this.autoplay))
        }
      },
      // 滑动开始事件
      handleTouchStart(e) {
        console.log(e)
        if (!this.touchable) return
        this.isStart = true
        e = e || window.event
        
        if(e.touches) {
          this.start = this.vertical ? e.touches[0].clientY : e.touches[0].clientX
        }else {
          this.start = this.vertical ? e.clientY : e.clientX
        }
        this.distance = 0
        // 清除过度
        this.removeTransition()
        // 清除定时器
        if (this.timer) {
          window.clearInterval(this.timer)
        }
        if (this.stopPropagation) e.stopPropagation()
      },
      // 滑动事件
      handleTouchmove(e) {
        if (!this.touchable) return
        e = e || window.event
        if(e.changedTouches) {
          this.distance = this.vertical ? e.changedTouches[0].clientY - this.start : e.changedTouches[0].clientX - this
          .start
        }else {
          this.distance = this.vertical ? e.clientY - this.start : e.clientX - this.start
        }
        
        if(this.isStart) {
          this.styleObj.transform = `${this.translate}(${-(this.index+1)*this.w+this.distance}px)`
        }
        
        if (this.stopPropagation) e.stopPropagation()
      },
      // 滑动结束事件
      handleTouchend(e) {
        if (!this.touchable) return
        e = e || window.event
        if (Math.abs(this.distance) >= (this.w / 3)) {
          if (this.distance > 0) { // 右滑
            this.index--
          } else { // 左滑
            this.index++
          }
        }
        this.move()
        this.handleAutoplay()
        this.isStart = false
        if (this.stopPropagation) e.stopPropagation()
      },
      // 添加过度
      addTransition() {
        this.styleObj.transition = `transform ${this.duration}ms`
        this.styleObj.webkitTransition = `transform ${this.duration}ms` /*做兼容*/
      },
      //清除过渡
      removeTransition() {
        this.styleObj.transition = "none";
        this.styleObj.webkitTransition = "none";
      },
      move() {
        this.addTransition()
        this.setTranslate()
      },
      handleTransitionend() {
        console.log('过度结束')
        if (this.index < 0) {
          this.removeTransition()
          this.index = this.totalCount - 3
          this.setTranslate()
        }
        if (this.index >= this.totalCount - 2) {
          this.removeTransition()
          this.index = 0
          this.setTranslate()
        }
        this.$emit('change', this.index)
      },
      setTranslate() {
        const translate = -(this.index + 1) * this.w
        this.styleObj.transform = `${this.translate}(${translate}px)`
      },
      // 上一个
      prev() {
        this.index--
        this.move()
      },
      // 下一个
      next() {
        this.index++
        this.move()
      },
      // 指定：index:number
      swipeTo(index) {
        this.index = index
        this.move()
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-swipe {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .sun-swipe-track {
    display: flex;
  }

  .sun-swipe-indicators {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 1;

    .sun-swipe-indicator {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 10px;
    }

    .sun-swipe-indicator-square {
      width: 16px;
      height: 3px;
      display: inline-block;
      border-radius: 3px;
      // background-color: rgba(0, 0, 0, 0.2);
      margin-right: 10px;
    }

    .sun-swipe-indicator:last-child {
      margin-right: 0px;
    }

    .sun-swipe-indicator-active {
      background-color: skyblue;

    }
  }

  .sun-swipe-indicators-vertical {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);

    .sun-swipe-indicator {
      width: 8px;
      height: 8px;
      display: block;
      border-radius: 50%;
      background-color: #fff;
      margin-bottom: 10px;
    }

    .sun-swipe-indicator:last-child {
      margin-bottom: 0px;
    }

    .sun-swipe-indicator-active {
      background-color: skyblue;

    }
  }

</style>

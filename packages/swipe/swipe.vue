<template>
  <div ref="swipe" class="sun-swipe" :style="{width:width&&parseInt(width)+'px',height:height&&parseInt(height)+'px'}">
    <div ref="swipeTrack" @transitionend="handleTransitionend"
      :class="[vertical?'sun-swipe-track-vertical':'sun-swipe-track']" :style="styleObj" @touchstart="handleTouchStart"
      @touchmove="handleTouchmove" @touchend="handleTouchend">
      <slot></slot>
    </div>

    <!-- 指示器插槽 -->
    <slot name="indicator"></slot>
    <div class="sun-swipe-indicators" :class="{'sun-swipe-indicators-vertical':vertical}"
      v-if="showIndicators&&!this.$slots.indicator">
      <span class="sun-swipe-indicator" :class="i===index?'sun-swipe-indicator-active':''" v-for="(item,i) in count"
        :key="item" :style="{backgroundColor:i===index?indicatorColor:'#fff'}"></span>
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
        default: 300
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
        default: '#1989fa'
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
        count: 0,
        translate: 'translate',
        styleObj: {
          transform: 'translateX(0px)',
          transition: 'none'
        }
      }

    },
    mounted() {
      // 初始索引
      this.index = parseInt(this.initialSwipe)
      // 获取宽度或高度
      this.w = this.vertical ? this.$refs.swipe.offsetHeight : this.$refs.swipe.offsetWidth
      // 得到轮播图的个数
      this.count = this.$refs.swipeTrack.children.length
      // 获取track的总宽度或高度
      this.totalW = this.w * this.count
      // 判断是translateY还是translateX
      this.translate = this.vertical ? this.translate + 'Y' : this.translate + 'X'

      // 是否autoPlay
      this.handleAutoplay()
      // 设置到当前索引的位置
      this.setTranslate(-this.index * this.w)
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
        e = e || window.event
        this.start = this.vertical ? e.touches[0].clientY : e.touches[0].clientX
        this.distance = 0
        // 清除过度
        this.removeTransition()
        // 清除定时器
        if (this.timer) {
          window.clearInterval(this.timer)
        }
      },
      // 滑动事件
      handleTouchmove(e) {
        e = e || window.event
        this.distance = this.vertical ? e.changedTouches[0].clientY - this.start : e.changedTouches[0].clientX - this
          .start
        if (this.index <= 0) {
          this.$refs.swipeTrack.lastElementChild.style.transform = `${this.translate}(${-this.totalW}px)`
        }
        if (this.index >= this.count - 1) {
          this.$refs.swipeTrack.firstElementChild.style.transform = `${this.translate}(${this.totalW}px)`
        }
        // console.log(this.$refs.swipeTrack.offsetLeft)
        this.styleObj.transform = `${this.translate}(${-this.index*this.w+this.distance}px)`
      },
      // 滑动结束事件
      handleTouchend(e) {
        // `${this.translate}(${0}px)`
        this.$refs.swipeTrack.lastElementChild.style.transform = `none`
        this.$refs.swipeTrack.firstElementChild.style.transform = `none`
        e = e || window.event
        if (Math.abs(this.distance) >= (this.w / 3)) {
          if (this.distance > 0) { // 右滑
            this.index--
            if (this.index < 0) {
              this.index = this.count - 1
              this.removeTransition()
            }

          } else { // 左滑
            this.index++
            if (this.index > this.count - 1) {
              this.index = 0
              this.removeTransition()
            }
          }
        }
        this.move()
        this.handleAutoplay()
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
        if (this.index < 0) {
          this.index = this.count - 1
        }
        if (this.index > this.count - 1) {
          this.index = 0
        }
        // 添加过度
        this.addTransition()
        this.setTranslate(-this.index * this.w)
      },
      handleTransitionend() {
        if (this.index < 0) {
          this.removeTransition()
          this.index = this.count - 1
          this.setTranslate(-this.index * this.w)
        }
        if (this.index > this.count - 1) {
          this.removeTransition()
          this.index = 0
          this.setTranslate(-this.index * this.w)
        }
        this.$emit('change', this.index)
      },
      setTranslate(translate) {
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
    background-color: red;
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

    .sun-swipe-indicator {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 50%;
      background-color: #fff;
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

<template>
  <div class="sun-slider" ref="sunSlider">
    <!-- <div class="sun-slider-bar" ref="sliderBar" :style="{width:widthRate+'%'}"></div> -->
    <div class="sun-slider-bar" ref="sliderBar"></div>
    <div ref="sliderWrap" :style="styleObj" class="sun-slider-button-wrap" @touchstart="handleTouchstart"
      @touchend="handleTouchend" @touchmove="handleTouchmove">
      <div class="sun-slider-button"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunSlider',
    props: {
      value: {
        type: Number | String
      },
      max: {
        type: String | Number,
        default: 100
      },
      min: {
        type: String | Number,
        default: 0
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        rate: 0,
        translateX: 0,
        startX: 0,
        w: 0,
        widthRate: 0,
        distanceX: 0,
        translate: 'translateX',
        styleObj: {
          transform: 'translate3d(-50%, -50%, 0)'
        }
      }
    },
    mounted() {
      if (this.vertical) {
        this.translate = 'translateY'
      }
      this.w = this.$refs.sunSlider.offsetWidth - (this.$refs.sliderWrap.offsetWidth / 2)
      this.rate = this.$refs.sunSlider.offsetWidth / (this.max - this.min)
      this.translateX = this.value * this.rate
      this.styleObj.transform = `translate3d(${this.translateX}px, -50%, 0)`
      // this.widthRate = this.value
      this.$refs.sliderBar.style.width = this.value + '%'
    },
    methods: {
      handleTouchstart(e) {
        this.startX = e.touches[0].clientX
        console.log(this.startX)
      },
      handleTouchmove(e) {
        console.log(e.changedTouches[0].clientX)
        this.distanceX = e.touches[0].clientX - this.startX
        let left = this.translateX + this.distanceX
        if (left <= 0) {
          left = 0
        }
        if (left >= this.w) {
          left = this.w
        }

        this.$refs.sliderBar.style.width = parseInt(left / this.rate + this.rate) + '%'
        // this.widthRate = parseInt(left / this.rate + this.rate)
        setTimeout(() => {
          this.styleObj.transform = `translate3d(${left}px, -50%, 0)`
        }, 100)

      },
      handleTouchend(e) {
        console.log('鼠标抬起', this.distanceX)
        this.translateX = this.translateX + this.distanceX
        this.$emit('input', this.translateX / this.rate)
      },

    }
  }

</script>

<style lang="less" scoped>
  .sun-slider {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #ebedf0;
    border-radius: 999px;
    cursor: pointer;

    &::before {
      position: absolute;
      top: -8px;
      right: 0;
      bottom: -8px;
      left: 0;
      content: '';
    }

    .sun-slider-bar {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #1989fa;
      border-radius: inherit;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

  }

  .sun-slider-button-wrap {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate3d(-50%, -50%, 0);
    cursor: grab;

    .sun-slider-button {
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
  }

</style>

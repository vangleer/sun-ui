<template>
  <div class="sun-pull-refresh">
    <div class="sun-pull-refresh-track" @touchstart="handleTouchstart" @touchmove="handleTouchmove"
      @touchend="handleTouchend" ref="sunPullRefresh" :style="styleObj">
      <div class="sun-pull-refresh-head">
        <template v-if="done">
          <span>释放即可刷新...</span>
        </template>
        <template v-else>
          <img src="../assets/imgs/loading.png" alt="">
          <span>加载中...</span>
        </template>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunPullRefresh',
    data() {
      return {
        start: 0,
        distance: 0,
        flag: true,
        timer: null,
        done: true,
        styleObj: {
          transform: 'translateY(0px)',
          transition: 'transform 0.3s'
        }
      }
    },
    mounted() {

    },
    methods: {
      handleTouchstart(e) {
        e = e || window.event
        if (this.flag) {
          this.start = e.touches[0].clientY
          this.styleObj.transition = 'none'

        } else {
          return
        }

      },
      handleTouchmove(e) {
        e = e || window.event
        if (this.flag) {
          this.distance = e.touches[0].clientY - this.start
          this.styleObj.transform = `translateY(${this.distance}px)`
        } else {
          return
        }
      },
      handleTouchend(e) {
        // window.clearTimeout(this.timer)
        this.done = false
        this.flag = false
        this.styleObj.transition = 'transform 0.3s'
        this.styleObj.transform = `translateY(${50}px)`

        this.timer = setTimeout(() => {
          this.styleObj.transform = `translateY(0px)`
          this.flag = true
          this.done = true
        }, 2000)
      },
    }
  }

</script>

<style lang="less" scoped>
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .sun-pull-refresh {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: calc(100vh - 50px);
  }

  .sun-pull-refresh-track {
    position: relative;
  }

  .sun-pull-refresh-head {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);

    img {
      width: 20px;
      height: 20px;
      animation: rotate 1s infinite;
      margin-right: 6px;
    }
  }

</style>

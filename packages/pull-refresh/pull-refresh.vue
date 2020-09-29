<template>
  <div class="sun-pull-refresh" ref="sunPullRefresh">
    <div class="sun-pull-refresh-track" @touchstart="handleTouchstart" @touchmove="handleTouchmove"
      @touchend="handleTouchend" ref="sunPullRefresh" :style="styleObj">
      <div class="sun-pull-refresh-head" :style="{height:headHeight+'px'}">
        <template v-if="done">
          <i v-if="status==1&&!$slots.pulling&&!$slots.loosing" class="sun-icon sun-icon-loading loading_icon"></i>
          <!-- <img  src="../assets/imgs/loading.png" class="loading_icon" alt=""> -->
          <span v-if="status===0&&(distance<100&&!$slots.pulling)">{{pullingText}}</span>
          <div v-if="(status===0&&distance<100)&&$slots.pulling">
            <slot name="pulling"></slot>
          </div>
          <span v-if="status===0&&(distance>100&&!$slots.loosing)">{{loosingText}}</span>
          <div v-if="(status===0&&distance>100)&&$slots.loosing">
            <slot name="loosing"></slot>
          </div>

          <span v-if="status===1&&!$slots.loading">加载中...</span>
          <div v-if="status===1&&$slots.loading">
            <slot name="loading"></slot>
          </div>
          <span v-if="status===2&&!$slots.success">{{!!successText?successText:'刷新成功'}}</span>
          <div v-if="status===2&&$slots.success">
            <slot name="success"></slot>
          </div>
        </template>

        <template v-else>
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
    props: {
      successText: { // 成功提示文字
        type: String,
        default: ''
      },
      pullingText: { // 下拉中的提示文字
        type: String,
        default: '下拉即可刷新...'
      },
      loosingText: {
        type: String,
        default: '释放即可刷新...'
      },
      successDuration: {
        type: String | Number,
        default: 500
      },
      headHeight: {
        type: Number | String,
        default: 50
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        start: 0,
        distance: 0,
        flag: true,
        timer: null,
        done: true,
        windowHeight: 0,
        scale: 10,
        status: 0, // 刷新状态 0下拉中，1加载中，2成功
        styleObj: {
          transform: 'translateY(0px)',
          transition: 'transform 0.3s'
        }
      }
    },
    mounted() {
      this.windowHeight = this.$refs.sunPullRefresh.offsetHeight
    },
    methods: {
      handleTouchstart(e) {
        e = e || window.event
        if (this.flag) {
          this.status = 0
          this.distance = 0
          this.start = e.touches[0].clientY
          this.styleObj.transition = 'none'
          this.$emit('input', false)
        } else {
          return
        }

      },
      handleTouchmove(e) {
        e = e || window.event
        let isPull = (e.touches[0].clientY - this.start) > 0 ? true : false
        if (this.flag && isPull) {
          // this.distance = ()
          console.log(e.touches[0].clientY - this.start, 'asdasd')
          if (this.distance >= 150) {
            this.distance += 1
          } else {
            this.distance = (e.touches[0].clientY - this.start) * 0.8
          }
          this.styleObj.transform = `translateY(${this.distance}px)`
        } else {
          console.log('不许滑动了')
          return
        }
        if (!isPull) {
          this.distance -= 1
        }
      },
      handleTouchend(e) {
        // window.clearTimeout(this.timer)
        if (this.flag && this.distance > 50) {
          this.flag = false
          this.status = 1
          this.styleObj.transition = 'transform 0.3s'
          this.styleObj.transform = `translateY(${this.headHeight}px)`
          this.$emit('refresh')
        } else {

          this.styleObj.transition = 'transform 0.3s'
          this.styleObj.transform = `translateY(0px)`
          return
        }
        this.$emit('input', true)
        this.timer = setTimeout(() => {
          this.status = 2
          this.$emit('input', false)
          if (!!this.successText) {
            setTimeout(() => {
              this.styleObj.transform = `translateY(0px)`
              this.flag = true
            }, parseInt(this.successDuration))
          } else {
            this.styleObj.transform = `translateY(0px)`
            this.flag = true
          }
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
    height: 100%;
  }

  .sun-pull-refresh-track {
    position: relative;
    height: 100%;
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

    .loading_icon {
      font-size: 16px;
      animation: rotate 0.6s infinite linear;
      margin-right: 6px;
    }
  }

</style>

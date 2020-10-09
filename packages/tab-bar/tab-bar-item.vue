<template>
  <div class="sun-tabbar-item" @click="handleItemClick">
    <div class="sun-info-icon">
      <template v-if="$slots.icon">
        <slot name="icon"></slot>
      </template>
      <i v-if="!isUrl&&!$slots.icon" :class="[iconPrefix,iconPrefix+'-'+icon]"></i>
      <img v-else :src="icon" class="sun-icon" alt="">
      <div v-if="dot" class="sun-info-icon-dot"></div>
      <div v-if="badge" class="sun-info-icon-badge">{{badge}}</div>
    </div>
    <div class="sun-info-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunTabbarItem',
    props: {
      icon: {
        type: String
      },
      dot: {
        type: Boolean,
        default: false
      },
      badge: {
        type: String | Number
      },
      url: {
        type: String
      },
      to: {
        type: String
      },
      replace: {
        btype: Boolean,
        default: false
      },
      iconPrefix: {
        type: String,
        default: 'sun-icon'
      }
    },
    data() {
      return {
        isUrl: false,
        isActive: false
      }
    },
    mounted() {
      this.isUrl = /\./.test(this.icon)
      console.log(this.replace)
    },
    methods: {
      handleItemClick() {
        if (this.url) {
          window.location.href = this.url
        }
        if (this.to && this.replace) {
          this.$router.replace(this.to)
        }
        if (this.to && !this.replace) {
          this.$router.push(this.to)
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  .sun-tabbar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    flex: 1;

    .sun-info-icon {
      position: relative;
      margin-bottom: 4px;

      img.sun-icon {
        height: 22px;
      }
    }
  }

  .sun-tabbar-item.sun-tabbar-item-active {
    color: #1989fa;
  }

  .sun-info-icon-dot {
    position: absolute;
    top: 2px;
    right: -6px;
    padding: 3px;
    border-radius: 50%;
    background-color: #ee0a24;
  }

  .sun-info-icon-badge {
    position: absolute;
    left: 100%;
    top: 0;
    font-size: 10px;
    padding: 0 3px;
    border-radius: 50%;
    background-color: #ee0a24;
    color: #fff;
    line-height: 1.2;
    text-align: center;
  }

  .sun-info-text {
    font-size: 13px;
  }

</style>

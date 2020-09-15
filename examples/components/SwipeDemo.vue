<template>
  <div class="app">
    <sun-swipe ref="mySwipe" autoplay indicator-color="green" @change="handleChange">
      <sun-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item" alt="">
      </sun-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{list.length}}
        </div>
      </template>
    </sun-swipe>

    <sun-button type="primary" @click="$refs.mySwipe.next()">下一张</sun-button>
    <sun-button type="info" @click="$refs.mySwipe.prev()">上一张</sun-button>
    <sun-button type="warning" @click="$refs.mySwipe.swipeTo(2)">调到第三张</sun-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
        list: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/apple-3.jpg',
          'https://img.yzcdn.cn/vant/apple-4.jpg'
        ]
      }
    },
    mounted() {
      console.log(this.$refs.mySwipe)
    },
    methods: {
      handleChange(index) {
        this.current = index
      }
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    height: 200px;
    display: block;
  }

  .custom-indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 2px 10px;
  }

</style>

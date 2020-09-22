# Vue 实现 Switch 组件-通过 vue.use()注册

## 组件封装代码 components/switch/switch.vue

```javascript
<template>
  <div class="sun-switch"
      :class="{'sun-switch-on':value,'sun-switch-disabled':disabled}"
      :style="{fontSize:size,backgroundColor:CalBgColor}"
      @click="handleChange"
  >
    <div class="sun-switch-node">
      <i class="sun-icon sun-icon-loading" :style="{color:CalBgColor}"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SunSwitch', // 组件名
    props: {
      /*
        <sun-switch v-model="checked"></sun-switch>
        在使用v-model的使用Vue会自动为组件传递一个value属性，值是 checked
        如果要改变v-model的值需要出发input方法 this.$emit('input',value)
      */
      value: { // v-model传递过来的值
        type: Boolean,
      },
      disabled: { // 是否是 disabled
        type: Boolean,
      },
      size: { // 大小
        type: String | Number,
      },
      loading: { // 是否是加载状态
        type: Boolean,
        default: false,
      },
      activeColor: { // 选中的颜色
        type: String,
      },
      inactiveColor: { // 未选中的颜色
        type: String,
      },
    },
    watch: {
      value(newVal) { // 监听value改变触发change事件
        this.$emit('change', newVal)
      },
    },
    computed: {
      /**
       * 计算大小
       *    1.如果包含单位就直接使用
       *    2.如果没有单位默认添加 px 为单位
       */
      calSize() {
        return /px|em|rem|%/.test(this.size) ? this.size : this.size + 'px'
      },
      /**
       * 计算背景颜色
       *    1.如果value为true就使用activeColor颜色
       *    2.如果为false就使用inactiveColor颜色
       */
      CalBgColor() {
        return this.value ? this.activeColor : this.inactiveColor
      },
    },
    methods: {
      // 点击的时候触发事件
      handleChange(e) {
        // 如果是disabled就直接返回
        if (this.disabled) return
        /**
         * 因为switch只有true和false两种状态
         * 所以每次点击取反原来的值就行
         */
        const model = !this.value
        // 触发input事件，传递取反后的值
        this.$emit('input', model)
        // 触发click事件方便注册为switch组件注册click事件再把事件对象传递过去
        this.$emit('click', e)
      },
    },
  }

</script>

<style lang="less" scoped>
  // loading动画
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  // switch样式
  .sun-switch {
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    width: 2em;
    height: 1em;
    font-size: 30px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  // 内部圆按钮样式
  .sun-switch-node {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 1em;
    height: 1em;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
      0 3px 3px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05),
      -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);

    .sun-icon-loading {
      animation: rotate 2s infinite linear;
      font-size: 0.6em;
    }
  }

  // 选中样式
  .sun-switch-on {
    background-color: #1989fa;

    .sun-switch-node {
      transform: translateX(1em);

      .sun-icon-loading {
        animation: rotate 2s infinite linear;
        color: #1989fa;
      }
    }
  }

  .sun-switch-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

</style>
```

## 注册组件 components/index.js

```javascript
/*
  这种方式主要是实现vue.use(方式的注册)
*/

// 首先导入Switch组件
import Switch from './switch/switch.vue'

// 创建一个install方法接收一个Vue为参数
const install = function(Vue) {
  /*
    使用Vue注册组件组件名为Switch的name属性
  */
  Vue.component(Switch.name, Switch)
}

/*
  默认导出一个对象，这个对象中要有install方法
  在使用vue.use(组件)是会调用这个install方法，而且会把Vue传进去
*/
export default {
  install,
}
```

## 在 main.js 中添加如下代码

```javascript
// 导入
import switch from './components/index'
// 注册
Vue.use(switch)
```

## 测试代码 app.vue

```javascript
<template>
  <div class="app">

    <!-- 基础用法 -->
    <sun-switch v-model="checked"></sun-switch>
    <!-- 大小 -->
    <sun-switch size="10" v-model="checked"></sun-switch>
    <!-- 是否禁用 -->
    <sun-switch disabled v-model="checked"></sun-switch>
    <!-- 自定义颜色 -->
    <sun-switch size="10" active-color="green" inactive-color="red" v-model="checked"></sun-switch>
    <!-- 事件 -->
    <sun-switch @click="handleClick" @change="handleChange" v-model="checked"></sun-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
      }
    },
    methods: { // 监听状态改变事件
      handleChange(value) {
        console.log(value)
      },
      handleClick(e) {
        console.log('点我了', e)
      },
    },
  }

</script>

<style lang="less">
</style>

```

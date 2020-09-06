// 整个包的入口
// 定义一个 install方法，接收 Vue作为参数，如果使用 use 注册插件，则所有的组件都将被注册
import Button from './Button.vue'

const components = [
  Button
]
const install = function (Vue) {
  // 注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否引入的全局文件，如果是就不用调用Vue.use()，而是直接调用install方法
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}

// 导入Vue
import Vue from 'vue'
// 导入toast组件
import ToastComponent from './toast.vue'

// 使用Vue.extend(ToastComponent)创建一个构造器
const ToastConstructor = Vue.extend(ToastComponent);

// 定义实例
let instance

// 创建一个Toast函数
const Toast = function (options = {}) {
  let toasts = Array.from(document.querySelectorAll('.sun-toast'))
  toasts.forEach(item => document.body.removeChild(item))
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  // 创建实例
  instance = new ToastConstructor({
    // 用opritions和data合并--options中的属性优先级要高于data
    data: options
  }).$mount()

  // 挂载到body中
  document.body.appendChild(instance.$el)

  // setTimeout(() => {

  // }, instance.duration * 1.5)

}
let methods = ['success', 'fail', 'clear', 'loading']

methods.forEach(type => {
  Toast[type] = function (options) {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    Toast({
      type: type,
      ...options
    })
  }
})

export default Toast

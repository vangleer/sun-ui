// 导入Vue
import Vue from 'vue'
// 导入初始组件
import MessageComponent from './message.vue'

// 使用Vue.extend(ToastComponent)创建一个构造器
const MessageConstructor = Vue.extend(MessageComponent);

// 定义实例
let instance

// 创建一个Toast函数
const Message = function (options = {}) {
  let messages = Array.from(document.querySelectorAll('.sun-message'))
  messages.forEach(item => document.body.removeChild(item))
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 创建实例
  instance = new MessageConstructor({
    // 用opritions和data合并--options中的属性优先级要高于data
    data: options
  }).$mount()

  // 挂载到body中
  document.body.appendChild(instance.$el)
  console.log(instance.$el)
}

let methods = ['success', 'fail', 'clear', 'loading']

methods.forEach(type => {
  Message[type] = function (options) {
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

export default Message

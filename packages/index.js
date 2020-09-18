// 整个包的入口
// 定义一个 install方法，接收 Vue作为参数，如果使用 use 注册插件，则所有的组件都将被注册
import Button from './button/Button.vue'
import Icon from './icon/icon.vue'
import Cell from './cell/cell.vue'
import Row from './layout/row.vue'
import Col from './layout/col.vue'
import Popup from './popup/popup.vue'
import Swipe from './swipe/swipe.vue'
import SwipeItem from './swipe/swipe-item.vue'
import PullRefresh from './pull-refresh/pull-refresh.vue'
import Navbar from './nav-bar/nav-bar.vue'
import Tabbar from './tab-bar/tab-bar.vue'
import TabbarItem from './tab-bar/tab-bar-item.vue'
import Tabs from './tab/tabs.vue'
import Toast from './toast/'
import Message from './message/message.vue'
import MessageMethod from './message/index'
import Checkbox from './form/checkbox.vue'
import CheckboxGroup from './form/checkboxGroup.vue'
import './assets/fonts/iconfont.css';
import './assets/css/base.css'
const components = [
  Button,
  Icon,
  Cell,
  Row,
  Col,
  Popup,
  Swipe,
  SwipeItem,
  PullRefresh,
  Navbar,
  Tabbar,
  TabbarItem,
  Tabs,
  Message,
  Checkbox,
  CheckboxGroup
]

// const exToast = Vue.extend(Toast)

const install = function (Vue) {
  // 注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
  Vue.prototype.$toast = Toast
  Vue.prototype.$message = MessageMethod
}

// 判断是否引入的全局文件，如果是就不用调用Vue.use()，而是直接调用install方法
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出install方法
export default {
  install,
}

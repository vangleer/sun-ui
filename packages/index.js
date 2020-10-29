// 整个包的入口
import Vue from 'vue'
// 定义一个 install方法，接收 Vue作为参数，如果使用 use 注册插件，则所有的组件都将被注册
import Button from "./button/index";
import Icon from './icon/index'
import Cell from './cell/index'
import {
  Row,
  Col
} from './layout/index'
import Popup from './popup/index'
import {
  Swipe,
  SwipeItem
} from './swipe/index'
import PullRefresh from './pull-refresh/index'
import NavBar from './nav-bar/index'
import {
  TabBar,
  TabBarItem
} from './tab-bar/index'
import {Tabs,TabItem} from './tab/index'
import Toast from './toast/index'
import Message from './message/index'
import {
  Checkbox,
  CheckboxGroup,
  Switch,
  Rate,
  Stepper,
  Input
} from './form/index'
import Dialog from './dialog/index'
import Pagination from './pagination/index'
import {Collapse,CollapseItem} from './collapse/index'
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
  NavBar,
  TabBar,
  Tabs,
  Checkbox,
  CheckboxGroup,
  Switch,
  Rate,
  Stepper,
  TabBarItem,
  TabItem,
  Dialog,
  Input,
  Pagination,
  Collapse,
  CollapseItem
];
// const exToast = Vue.extend(Toast)
const install = function (Vue) {
  if (install.installed) return;
  // 注册所有组件
  components.map(item => Vue.component(item.name, item));
  Vue.prototype.$toast = Toast;
  Vue.prototype.$message = MessageMethod;
};

// 判断是否引入的全局文件，如果是就不用调用Vue.use()，而是直接调用install方法
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
Vue.prototype.$calSize = function (size) {
  return /px|em|rem|%/.test(size) ? size : size + "px";
};
// 导出install方法
export default {
  install
};
// 分别导出
export {
  Button,
  Icon,
  Cell,
  Row,
  Col,
  Popup,
  Swipe,
  SwipeItem,
  PullRefresh,
  NavBar,
  TabBar,
  TabBarItem,
  Tabs,
  Checkbox,
  CheckboxGroup,
  Switch,
  Rate,
  Stepper,
  Toast,
  Message,
  TabItem,
  Dialog,
  Input,
  Pagination,
  Collapse,
  CollapseItem
};

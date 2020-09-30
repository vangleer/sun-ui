import Vue from "vue";
import App from "./App.vue";
// import Sun from "../packages";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Cell,
  Row,
  Col,
  Icon,
  NavBar,
  Message,
  Popup,
  PullRefresh,
  Toast,
  Tabs,
  Rate,
  Stepper,
  Swipe,
  SwipeItem,
  Switch,
  TabBar,
  TabBarItem
} from "../packages";
Vue.config.productionTip = false;
// Vue.use(Sun);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Cell);
Vue.use(Row);
Vue.use(Col);
Vue.use(CheckboxGroup);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Message);
Vue.use(Popup);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Tabs);
Vue.use(Rate);
Vue.use(Stepper);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Switch);
Vue.use(TabBar);
Vue.use(TabBarItem);

new Vue({
  render: h => h(App)
}).$mount("#app");

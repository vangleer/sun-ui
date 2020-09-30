import TabBar from './tab-bar.vue'
import TabBarItem from './tab-bar-item.vue'
TabBar.install = (Vue) => Vue.component(TabBar.name, TabBar);
TabBarItem.install = (Vue) => Vue.component(TabBarItem.name, TabBarItem);
export {
  TabBar,
  TabBarItem
}

import Tabs from './tabs.vue'
import TabItem from './tab-item.vue'
Tabs.install = (Vue) => Vue.component(Tabs.name, Tabs);
TabItem.install = (Vue) => Vue.component(TabItem.name, TabItem);
export {Tabs,TabItem} 

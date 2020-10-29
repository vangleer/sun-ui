import Collapse from './collapse.vue'
import CollapseItem from './collapseItem.vue'
Collapse.install = (Vue) => Vue.component(Collapse.name, Collapse);
CollapseItem.install = (Vue) => Vue.component(CollapseItem.name, CollapseItem);

export {Collapse,CollapseItem}

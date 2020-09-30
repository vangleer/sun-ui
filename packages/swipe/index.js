import Swipe from './swipe.vue'
import SwipeItem from './swipe-item.vue'
Swipe.install = (Vue) => Vue.component(Swipe.name, Swipe);
SwipeItem.install = (Vue) => Vue.component(SwipeItem.name, SwipeItem);
export {
  Swipe,
  SwipeItem
}

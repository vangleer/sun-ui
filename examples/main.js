import Vue from 'vue'
import App from './App.vue'
import Sun from '../packages'
Vue.config.productionTip = false
Vue.use(Sun)
new Vue({
  render: h => h(App)
}).$mount('#app')

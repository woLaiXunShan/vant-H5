import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fetch from './api'
import check from './utils/check'
import date from './utils/date'
import './utils/guard'

Vue.config.productionTip = false
// 创建全局
Vue.prototype.fetch = fetch
Vue.prototype.$check = check
Vue.prototype.$date = date

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

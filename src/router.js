import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', meta: { title: '首页' }, component: () => import('./views/Index') },
  ]
})

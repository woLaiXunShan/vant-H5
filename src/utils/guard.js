import router from '../router'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.loginAuth) { // 访问的路由必须先登录
    if (localStorage.token) {
      next()
    } else {
      sessionStorage.fromUrl = from.path
      next({ path: '/Login' })
    }
  } else {
    next()
  }
})

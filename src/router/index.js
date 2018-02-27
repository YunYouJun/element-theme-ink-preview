import Vue from 'vue'
import Router from 'vue-router'
import routes from './route.config'

import demoBlock from '@/components/demo-block.vue'
import MainFooter from '@/components/footer.vue'
import MainHeader from '@/components/header.vue'
import SideNav from '@/components/side-nav'
import FooterNav from '@/components/footer-nav'

Vue.use(Router)

Vue.component('demo-block', demoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = 'Ink - ' + to.meta.title
  }
  next()
})

export default router

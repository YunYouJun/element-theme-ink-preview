import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

// import '../packages/element-theme-ink/src/index.scss'
// import '../packages/element-theme-ink/lib/index.css'
// import '../packages/element-theme-ink/src/icon.scss'
import './index.scss'

Vue.use(ElementUI)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import axios from 'axios'
import { webFrame } from 'electron'
import 'rxjs'

import App from './app'

import router from './router'
import store from './store'
import i18n from './i18n/vue-i18n'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// Disable pinch and smart zoom on macOS
webFrame.setZoomFactor(1)
webFrame.setZoomLevelLimits(1, 1)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')

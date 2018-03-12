import Vue from 'vue'
import axios from 'axios'

import App from './app'
import router from './router'
import store from './store'
import i18n from './i18n/vue-i18n'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')

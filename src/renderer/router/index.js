import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/pages/landing-page'
import GettingStarted from '@/pages/getting-started'
import RestoreBackup from '@/pages/restore-backup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/getting-started',
      component: GettingStarted
    },
    {
      path: '/restore-backup',
      component: RestoreBackup
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import LandingPage from '@/pages/landing-page'
import GettingStarted from '@/pages/getting-started'
import RestoreBackup from '@/pages/restore-backup'
import CreatePortfolio from '@/pages/create-portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [
        {
          path: 'create',
          component: CreatePortfolio
        }
      ]
    },
    {
      name: 'landing-page',
      path: '/start',
      component: LandingPage
    },
    {
      name: 'getting-started',
      path: '/getting-started',
      component: GettingStarted
    },
    {
      name: 'restore-backup',
      path: '/restore-backup',
      component: RestoreBackup
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

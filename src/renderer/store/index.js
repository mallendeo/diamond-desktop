import Vue from 'vue'
import Vuex from 'vuex'

import { saveSettings } from '../../lib/database'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

// Save to database on portfolio or settings update
store.subscribe(async (mutation, state) => {
  const { settings } = state

  if (mutation.type === 'settings/SETTINGS_SAVE') {
    await saveSettings(settings)
  }
})

export default store

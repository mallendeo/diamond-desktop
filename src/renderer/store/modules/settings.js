import * as types from '../mutation-types'
import i18n from '../../i18n/vue-i18n'
import * as Database from '@/../lib/database/database'
import { saveSettings } from '@/../lib/database'

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const LANGUAGES = {
  EN_US: 'en-US',
  ES_CL: 'es-CL'
}

const state = {
  init: false, // Show welcome screen
  dbLoaded: false, // fetch settings from db
  lastSaved: null,
  themes: THEMES,
  theme: THEMES.DARK,
  languages: LANGUAGES,
  lang: LANGUAGES.EN_US
}

const mutations = {
  [types.SETTINGS_SET_LANGUAGE] (state, lang) {
    state.lang = lang
    i18n.locale = lang
  },

  [types.SETTINGS_SET_THEME] (state, theme) {
    state.theme = theme
  },

  [types.SETTINGS_SET_INIT] (state, init) {
    state.init = init
  },

  [types.SETTINGS_LOAD_DONE] (state) {
    state.dbLoaded = true
  },

  [types.SETTINGS_SAVE] (state) {
    state.lastSaved = Date.now()
  }
}

const getters = {
  lang (state) {
    return state.lang.split('-')[0]
  }
}

const actions = {
  async loadSettings ({ commit, state }) {
    const db = await Database.get()
    const doc = await db.settings.findOne().exec()

    if (doc) {
      commit(types.SETTINGS_SET_LANGUAGE, doc.lang)
      commit(types.SETTINGS_SET_THEME, doc.theme)
      commit(types.SETTINGS_SET_INIT, doc.init)
    }

    commit(types.SETTINGS_LOAD_DONE)
    return doc
  },

  async setLang ({ commit, state }, langKey) {
    const lang = state.languages[langKey]
    if (!lang) return
    commit(types.SETTINGS_SET_LANGUAGE, lang)
    commit(types.SETTINGS_SAVE)
  },

  async setTheme ({ commit, state }, themeKey) {
    const theme = state.themes[themeKey]
    if (!theme) return
    commit(types.SETTINGS_SET_THEME, theme)
    commit(types.SETTINGS_SAVE)
  },

  async initDone ({ commit, state }) {
    commit(types.SETTINGS_SET_INIT, true)
    await saveSettings(state)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

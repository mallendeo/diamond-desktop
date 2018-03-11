import * as types from '../mutation-types'
import i18n from '../../i18n/vue-i18n'

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const LANGUAGES = {
  EN_US: 'en-US',
  ES_CL: 'es-CL'
}

const state = {
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
  }
}

const getters = {
  lang (state) {
    return state.lang.split('-')[0]
  },

  theme (state) {
    return state.theme
  }
}

const actions = {
  setLang ({ commit, state }, langKey) {
    const lang = state.languages[langKey]
    if (lang) commit(types.SETTINGS_SET_LANGUAGE, lang)
  },

  setTheme ({ commit, state }, themeKey) {
    const theme = state.themes[themeKey]
    if (theme) commit(types.SETTINGS_SET_THEME, theme)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

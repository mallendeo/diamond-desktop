import * as types from '../mutation-types'

const state = {
  showDelta: false,
  showBlockfolio: false
}

const mutations = {
  [types.HOME_SHOW_DELTA] (state, show) {
    state.showDelta = show
  },

  [types.HOME_SHOW_BLOCKFOLIO] (state, show) {
    state.showBlockfolio = show
  }
}

const actions = {
  toggleDelta ({ commit, state }) {
    commit(types.HOME_SHOW_DELTA, !state.showDelta)
  },

  toggleBlockfolio ({ commit, state }) {
    commit(types.HOME_SHOW_BLOCKFOLIO, !state.showBlockfolio)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import * as types from '../mutation-types'

const state = {
  portfolios: null,
  lastSynced: null
}

const mutations = {
  [types.DELTA_SET_USER_DATA] (state, userData) {
  },
  [types.DELTA_SET_USER_DATA] (state, userData) {
  }
}

const actions = {
  async getUserData ({ commit }) {
    let portfolios = localStorage.getItem('diamond_portfolios')

    if (!portfolios) {
    }

    commit(types.DELTA_SET_USER_DATA, portfolios)
    return portfolios
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

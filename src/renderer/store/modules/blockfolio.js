import * as blockfolio from '@/../api/blockfolio'
import * as types from '../mutation-types'

const state = {
  token: null,
  portfolio: null
}

const mutations = {
  [types.BLOCKFOLIO_SET_TOKEN] (state, token) {
    state.token = token
  },

  [types.BLOCKFOLIO_SET_PORTFOLIO] (state, portfolio) {
    state.portfolio = portfolio
  }
}

const actions = {
  async getPortfolio ({ commit, state }, token = state.token) {
    const portfolio = await blockfolio.getAllPositions(token)
    commit(types.BLOCKFOLIO_SET_PORTFOLIO, portfolio)
  },

  setToken ({ commit, state }, token) {
    commit(types.BLOCKFOLIO_SET_TOKEN, token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

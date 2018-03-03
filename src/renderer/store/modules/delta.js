import { random } from '@/../lib/helpers'
import * as delta from '@/../api/delta'
import * as types from '../mutation-types'

const state = {
  syncToken: null,
  syncStatus: null,
  device: null,
  deviceId: null,
  portfolio: null,
  overviews: null
}

const mutations = {
  [types.DELTA_SET_USER_DATA] (state, userData) {
    const { device, portfolio } = userData

    state.device = device
    state.portfolio = portfolio
  },

  [types.DELTA_SET_DEVICE_ID] (state, deviceId) {
    state.deviceId = deviceId
  },

  [types.DELTA_SET_SYNC_TOKEN] (state, token) {
    state.syncToken = token
  },

  [types.DELTA_SET_SYNC_STATUS] (state, status) {
    state.syncStatus = status
  },

  [types.DELTA_SET_PORTFOLIO] (state, portfolio) {
    state.portfolio = portfolio
  },

  [types.DELTA_SET_OVERVIEWS] (state, overviews) {
    state.overviews = overviews
  }
}

const actions = {
  async getUserData ({ commit, state }) {
    const deviceId = state.deviceId || random()
    const userData = await delta.register({ deviceId })
    commit(types.DELTA_SET_USER_DATA, userData)
    commit(types.DELTA_SET_DEVICE_ID, deviceId)
    return userData
  },

  async getSyncToken ({ commit, state }) {
    const token = await delta.createSyncToken(state.device.token)
    commit(types.DELTA_SET_SYNC_TOKEN, token)
    return token
  },

  async getSyncStatus ({ commit, state }) {
    // status can be STARTED or ENDED
    const status = await delta.getSyncStatus(state.device.token, state.syncToken.token)

    if (status !== state.syncStatus) {
      commit(types.DELTA_SET_SYNC_STATUS, status)
    }

    return status
  },

  async getPortfolio ({ commit, state }, id = state.portfolio.id) {
    const data = await delta.getPortfolio(state.device.token, id)
    commit(types.DELTA_SET_PORTFOLIO, data)
    return data
  },

  async getOverviews ({ commit, state }) {
    const data = await delta.getOverviews(state.device.token)
    commit(types.DELTA_SET_OVERVIEWS, data.overviews)
    return data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import axios from 'axios'

const HOST = 'https://api.getdelta.io'

const api = axios.create({
  baseURL: HOST
})

export const register = async config => {
  if (!config) throw Error('missing config')
  if (!config.deviceId) throw Error('missing prop `deviceId`')

  const defaultConfig = {
    appVersion: '1.5.2',
    brand: 'Android',
    country: 'US',
    currency: 'USD',
    locale: 'en-US',
    manufacturer: 'LG',
    model: 'LG V30 - 8.1.0 - API 27 - 768x1280',
    name: 'Diamond',
    systemName: 'Android',
    systemVersion: '8.1.0',
    tablet: false,
    timezone: 'America/New_York'
  }

  const { data: { device, portfolio } } = await api(`/device/register`, {
    method: 'post',
    data: { ...defaultConfig, ...config }
  })

  return { device, portfolio }
}

export const createSyncToken = async token => {
  const { data } = await api(`/device/create-migration-token`, {
    method: 'post',
    data: { type: 'SYNC' },
    headers: { authorization: `Bearer ${token}` }
  })

  return data
}

export const getSyncStatus = async (token, syncToken) => {
  // status can be STARTED or ENDED
  const { data: { status } } = await api(`/device/migration-token-status`, {
    method: 'post',
    data: { token: syncToken },
    headers: { authorization: `Bearer ${token}` }
  })

  return status
}

export const getPortfolio = async (token, id, graph = false) => {
  const params = graph ? { getGraphData: 1, graphPeriod: 'ALL-TIME' } : {}

  const { data } = await api(`/portfolio`, {
    params: { id, ...params },
    headers: { authorization: `Bearer ${token}` }
  })

  return data
}

export const getOverviews = async token => {
  const { data } = await api(`/portfolio/overviews`, {
    headers: { authorization: `Bearer ${token}` }
  })

  return data
}

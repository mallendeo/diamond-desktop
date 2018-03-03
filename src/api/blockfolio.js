import axios from 'axios'

const HOST = 'https://api-v0.blockfolio.com'

const api = axios.create({
  baseURL: `${HOST}/rest`
})

export const getAllPositions = async token => {
  if (!token) throw Error('missing token')

  const { data: { positionList } } = await api(`/get_all_positions/${token}`)

  return positionList
}

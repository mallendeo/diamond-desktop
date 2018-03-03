import crypto from 'crypto'

export const random = (l = 16) =>
  crypto.randomBytes(Math.ceil(l / 2)).toString('hex').slice(0, l)

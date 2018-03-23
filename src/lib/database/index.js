import * as Database from './database'
import pick from 'lodash/pick'

export const saveSettings = async settings => {
  const db = await Database.get()
  const doc = await db.settings.findOne().exec()
  const props = pick(settings, 'theme', 'init', 'lang')

  if (!doc) return db.settings.insert(props)
  await doc.update({ $set: props })
}

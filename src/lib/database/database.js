import RxDB from 'rxdb'
import bip39 from 'bip39'

import PortfolioSchema from './portfolio-schema'
import SettingsSchema from './settings-schema'

RxDB.plugin(require('pouchdb-adapter-idb'))

const collections = [{
  name: 'portfolios',
  schema: PortfolioSchema
}, {
  name: 'settings',
  schema: SettingsSchema
}]

/* because vue-dev-server only reloads the changed code and not the whole page,
* we have to ensure that the same database only exists once
* we can either set ignoreDuplicate to true
* or remove the previous instance which we do here
*/
window.dbs = window.dbs || []
const clearPrev = async () => {
  await Promise.all(
    window.dbs
      .map(db => db.destroy())
  )
}

let dbPromise = null

const mnemonic = localStorage.getItem('privateKey') || bip39.generateMnemonic()
localStorage.setItem('privateKey', mnemonic)

const _create = async () => {
  console.log('DatabaseService: creating database..')
  await clearPrev()
  const db = await RxDB.create({
    name: 'diamonddb',
    adapter: 'idb',
    password: mnemonic
  })

  window.dbs.push(db)

  console.log('DatabaseService: created database')
  window['db'] = db // write to window for debugging

  // create collections
  console.log('DatabaseService: create collections')
  await Promise.all(collections.map(colData => db.collection(colData)))

  // hooks
  db.collections.portfolios.preInsert(async ({ name }) => {
    if (await db.collections.portfolios.findOne({ name })) {
      throw new Error('duplicated name')
    }
  })

  return db
}

export function get () {
  if (!dbPromise) { dbPromise = _create() }
  return dbPromise
}

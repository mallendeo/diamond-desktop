const settingsSchema = {
  title: 'settings schema',
  description: 'app settings (theme, sync, lang)',
  version: 0,
  type: 'object',
  properties: {
    theme: { type: 'string', default: 'dark', enum: ['dark', 'light'] },
    lang: { type: 'string', default: 'dark', enum: ['en-US', 'es-CL'] },
    init: { type: 'boolean', default: false }
  }
}

export default settingsSchema

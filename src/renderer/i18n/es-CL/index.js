export default {
  currency: {
    style: 'currency', currency: 'CLP'
  },
  portfolio: {
    migrate: 'Migrar desde',
    restore: 'Restaurar desde respaldo',
    create: 'Empezar'
  },
  ui: {
    goBack: 'Volver'
  },
  init: {
    welcome: 'Bienvenido a Diamond!',
    home: 'Inicio',
    title: 'Empezando',
    gettingStarted:
      `Si vienes de <strong>Delta</strong> o <strong>Blockfolio</strong>,
      puedes importar todos tus portafolios y transacciones usando la herramienta de migración.`,
    importFrom: 'Importar desde',
    create: 'Crear nuevo portafolio',
    info: 'Nota: Puedes importar varias cuentas de Delta y Blockfolio.',

    addAnother: 'Importar mas portafolios',
    done: 'Ir a tu dashboard'
  },
  delta: {
    title: 'Importar desde Delta',
    defaultName: 'Portafolio principal',
    importing: 'Importando tus portafolios',

    steps: [
      'En Delta abre <strong>"Settings/Sync data"</strong>.',
      'Selecciona <strong>"Sync from this device"</strong>.',
      'Escanea el código.'
    ]
  },
  blockfolio: {
    title: 'Importar desde Blockfolio',
    pastePlaceholder: 'También puedes pegar el token aquí.',

    steps: [
      'En Blockfolio, ve a <strong>"Settings"</strong>.',
      'Al final selecciona <strong>"Token"</strong>.',
      'En tu teléfono ve a <span class="link">getdiamond.io/<strong>{code}</strong></span>',
      'Pega el token.'
    ]
  }
}

export default {
  currency: {
    style: 'currency', currency: 'USD'
  },
  portfolio: {
    migrate: 'Migrate from',
    restore: 'Restore from backup',
    create: 'Getting started'
  },
  ui: {
    goBack: 'Go back'
  },
  init: {
    welcome: 'Welcome to Diamond!',
    home: 'Home',
    title: 'Getting started',
    gettingStarted:
      `If you come from <strong>Delta</strong> or <strong>Blockfolio</strong>,
      you can import all your portfolios and transactions using the migration tool.`,
    importFrom: 'Import from',
    create: 'Create new portfolio',
    info: 'Note: You can import as many accounts as you want.',

    addAnother: 'Import more portfolios',
    done: 'Go to your dashboard'
  },
  delta: {
    title: 'Import from Delta',
    defaultName: 'Main Portfolio',
    importing: 'Importing your portfolios',

    steps: [
      'On Delta go to <strong>"Settings/Sync data"</strong>.',
      'Select <strong>"Sync from this device"</strong>.',
      'Scan the code.'
    ]
  },

  blockfolio: {
    title: 'Import from Blockfolio',
    pastePlaceholder: 'Or paste the token here.',

    steps: [
      'On Blockfolio, go to <strong>"Settings"</strong>.',
      'Scroll to the bottom and tap on <strong>"Token"</strong>.',
      'On your phone go to <span class="link">getdiamond.io/<strong>{code}</strong></span>',
      'Paste the token.'
    ]
  }
}

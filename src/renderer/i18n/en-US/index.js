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
      `If you have <strong>Delta</strong> or <strong>Blockfolio</strong>,
      you can import all your portfolios and transactions using the migration tool.`,
    importFrom: 'Import from',
    create: 'Create new portfolio',
    info: 'Note: You can import as many Delta or Blockfolio accounts as you want.',

    addAnother: 'Import more portfolios',
    done: 'Go to your dashboard'
  },
  delta: {
    title: 'Migrate from Delta',
    defaultName: 'Main Portfolio',
    importing: 'Importing your portfolios',

    step1: 'On Delta go to <strong>"Settings/Sync data"</strong>.',
    step2: 'Select <strong>"Sync from this device"</strong>.',
    step3: 'Confirm that you see the QR code below.',
    step4: 'Scan the code.'
  },

  blockfolio: {
    step1: 'On Blockfolio, go to "Settings".',
    step2: 'Scroll to the very bottom and tap on "Token".',
    step3: 'Open your browser on your phone and go to getdiamond.io/{code}',
    step4: 'Your portfolio will appear here.'
  }
}

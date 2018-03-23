const portfolioSchema = {
  title: 'portfolio schema',
  description: 'encrypted portfolios',
  encrypted: true,
  version: 0,
  type: 'object',
  properties: {
    watchlist: {
      type: 'array',
      item: {
        type: 'object',
        properties: {
          coin: { type: 'string' },
          exchange: { type: 'string' },
          pair: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          notes: { type: 'string' }
        }
      }
    },
    source: {
      description: 'portfolio source (delta, blockfolio), if organic leave null',
      type: 'object',
      required: ['name', 'createdAt', 'snapshot'],
      properties: {
        name: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        snapshot: { type: 'object' }
      }
    },
    graphData: {
      description: 'portfolio worth graph history',
      type: 'array',
      item: {
        type: 'object',
        properties: {
          timestamp: { type: 'number' },
          worthBtc: { type: 'number' },
          worthUsd: { type: 'number' }
        }
      }
    },
    transactions: {
      type: 'array',
      uniqueItems: true,
      item: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          coin: { type: 'string' },
          way: { type: 'string', enum: ['buy', 'sell', 'transfer'] },
          type: { type: 'string', enum: ['crypto', 'fiat', 'ico'] },
          exchange: { type: 'string' },
          pair: { type: 'string' },
          priceUsd: { type: 'number' },
          priceInTradeCurrency: { type: 'number' },
          amount: { type: 'number' },
          fee: { type: 'number' },
          datetime: { type: 'string', format: 'date-time' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
          cost: { type: 'number' },
          notes: { type: 'string' },
          tradeCurrency: { type: 'string' }
        }
      }
    }
  }
}

export default portfolioSchema

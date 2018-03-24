<template>
  <div>
    <h1>Create portfolio</h1>
    <input type="text" v-model="filter">
    <select v-model="style">
      <option value="black">black</option>
      <option value="white">white</option>
      <option value="color">color</option>
      <option value="icon">icon</option>
    </select>
    <ul class="list--simple" v-if="list">
      <li class="list__item list__item--active" :key="coin" v-for="coin of list">
        <img class="mr-2" :src="getIcon(markets[coin].base.toLowerCase(), style)">
        {{ markets[coin].info.name }}
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable new-cap */

import ccxt from 'ccxt'
const getIcon = (coin, style = 'icon') => `/static/icons/coins/${style}/${coin}.svg`

const cmc = new ccxt.coinmarketcap()

export default {
  data: () => ({ markets: null, filter: '', style: 'white' }),
  async mounted () {
    this.markets = await cmc.loadMarkets()
  },
  computed: {
    list () {
      return this.markets && Object.keys(this.markets)
        .filter(m =>
          m.endsWith('USD') &&
          m.toLowerCase().includes(this.filter)
        )
        .splice(0, 20)
    }
  },
  methods: {
    getIcon
  }
}
</script>

<style lang="scss" scoped>
.list--simple {
  overflow: auto;
  height: 80vh;
}
</style>

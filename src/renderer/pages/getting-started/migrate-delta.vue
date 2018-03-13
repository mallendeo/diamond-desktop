<template>
  <float-panel>
    <app-loading
      v-if="loading"
      :show-close-btn="true"
      @btnclick="toggleDelta"
    />

    <template v-if="!loading">
      <template v-if="!synced">
        <h1 class="title mt-5 mb-5 fs-5">{{ $t('delta.title') }}</h1>
        <ol type="1" class="list list--ordered fs-7">
          <li class="list__item" v-html="$t('delta.step1')" />
          <li class="list__item" v-html="$t('delta.step2')" />
          <li class="list__item" v-html="$t('delta.step3')" />
          <li class="list__item" v-html="$t('delta.step4')" />
        </ol>

        <qrcode
          class="qr-code"
          :class="{ 'qr-code--border': darkTheme }"
          :value="syncToken.token"
          v-if="syncToken && !synced"
          :options="{
            size: 200,
            foreground: 'hsla(222, 24%, 20%, 1)', // $c-darker-stormcloud
            background: darkTheme ? '#fff' : 'transparent'
          }"
        ></qrcode>

        <!-- <span class="content__msg">
          Waiting for you to scan the QR code. {{ secToExpire }} seconds remaining.
        </span> -->
      </template>
      
      <template v-if="synced">
        <h2 class="title mt-5 mb-5 fs-5">{{ $t('delta.importing') }}</h2>
        <ul class="list list--simple fs-7">
          <li
            class="list__item"
            :class="{ 'list__item--active': portfolio.fetching }"
            v-for="portfolio of overviews"
            :key="portfolio.id"
          >
            <span class="text--bold pf__name">{{ portfolio.name || $t('delta.defaultName') }}</span>
            <span class="pull--right pf__amount">{{ $n(portfolio.worth, 'currency') }}</span>
            <check-circle
              :showTick="portfolio.done"
              class="check ml-2"
              :class="{
                'check--active': portfolio.fetching,
                'check--purple': !darkTheme
              }"
            />
          </li>
        </ul>

        <div class="btn-group btn-group--nav" :class="{ 'btn-group--show': gotAllOverviews }">
          <button class="btn" @click="toggleDelta">{{ $t('init.addAnother') }}</button>
          <button class="btn" @click="() => {}">{{ $t('init.done') }}</button>
        </div>
      </template>

      <button
        v-if="!synced"
        class="btn btn--to-bottom fs-7"
        @click="toggleDelta"
      >
        {{ $t('ui.goBack') }}
      </button>
    </template>
  </float-panel>
</template>

<script>
import VueQrcode from '@xkeshi/vue-qrcode'
import { mapState, mapActions } from 'vuex'

import sortBy from 'lodash/sortBy'
import flatten from 'lodash/flatten'
import { DateTime } from 'luxon'

import FloatPanel from '@/components/float-panel'
import AppLoading from '@/components/animated/app-loading'
import CheckCircle from '@/components/animated/check-circle'

export default {
  components: {
    qrcode: VueQrcode,
    FloatPanel,
    AppLoading,
    CheckCircle
  },

  data () {
    return {
      synced: false, // REMOVE ME!
      secToExpire: 0,
      timeout: null,
      loading: true,

      // REMOVE ME!
      overviews: [
        { id: 574509934, name: null, currency: 'USD', worth: 8749, done: false, fetching: false },
        { id: 574509935, name: 'Altcoins Short Term Poloniex Bittrex', currency: 'USD', worth: 2500, done: false, fetching: false },
        { id: 574509936, name: 'Shitcoins', currency: 'USD', worth: 1218, done: false, fetching: false },
        { id: 574509937, name: 'Margin Trading', currency: 'USD', worth: 8573, done: false, fetching: false },
        { id: 574509938, name: 'Holdings Long Term', currency: 'USD', worth: 12452, done: false, fetching: false }
      ]
    }
  },

  async mounted () {
    if (!this.portfolio) await this.getUserData()
    this.syncData()
    this.getOverviews()
  },

  methods: {
    ...mapActions('delta', [
      'getUserData',
      'getSyncToken',
      'getPortfolio',
      'getSyncStatus',
      'getOverviews'
    ]),

    ...mapActions('home', ['toggleDelta']),

    wait: async (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms)),

    async syncData () {
      await this.getSyncToken()
      this.loading = false

      // -------------------------- REMOVE ME!
      const fakeGetPortfolio = async index => {
        this.overviews[index].fetching = true
        await this.wait(Math.random() * 1000 + 100)
        this.overviews[index].done = true
      }

      const fakeGetAllPortfolios = async (index = 0) => {
        if (!this.overviews[index]) return
        await fakeGetPortfolio(index)
        fakeGetAllPortfolios(++index)
      }

      await this.wait(2000)
      this.synced = true
      fakeGetAllPortfolios()
      if (window) return
      // -------------------------- REMOVE ME!

      this.checkStatus()

      const expires = new Date(this.syncToken.expiresAt).valueOf()
      this.secToExpire = (expires - Date.now()) / 1000
    },

    async checkStatus () {
      const status = await this.getSyncStatus()

      if (status === 'ENDED') {
        await this.getOverviews()
        await this.getUserData()
        this.getPortfolio()
        return
      }

      await this.wait()
      this.checkStatus()
    }
  },

  destroyed () {
    clearTimeout(this.timeout)
  },

  computed: {
    ...mapState('delta', [
      'syncToken',
      'syncStatus',
      'portfolio'
      /* 'overviews' */
    ]),

    ...mapState('settings', {
      darkTheme: state => state.theme === 'dark'
    }),

    transactions () {
      if (!this.portfolio) return []

      const { transactions: txs } = this.portfolio
      const flatArr = flatten(Object.keys(txs).map(coin => txs[coin]))
      return sortBy(flatArr, ['datetime'])
    },

    /* UNCOMMENT ME!
    synced () {
      return this.syncStatus === 'ENDED'
    },
    */

    gotAllOverviews () {
      return !this.overviews.filter(p => !p.done).length
    }
  },

  filters: {
    date (isoStr) {
      const dt = DateTime.fromISO(isoStr, { locale: 'en' })
      return dt.toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' })
    },

    floor (num) {
      return Math.floor(num)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/globals';

.float-panel {
  color: var(--text-color-light);
}

.content__msg { opacity: .5; }

.btn-group {
  transition: all .2s ease;
  transform: translateY(100%);
  width: 100%;

  &--show {
    transition-delay: .2s;
    transform: translateY(0%);
  }
}

.check {
  width: 1rem; height: 1rem;
  --stroke: #f0f0f0;

  &--active { --stroke: #00ffad; }
  &--purple { --stroke: var(--c-purple); }
}

.qr-code {
  margin: auto;
  margin-top: 4rem;

  &--border {
    padding: .25rem;
    border-radius: .5rem;
    background: white;
    border: 1px solid rgba(0,0,0,.1);
  }
}

.text--bold {
  font-weight: bold;
  flex: 0 0 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pull--right {
  align-self: flex-end;
  margin-left: auto;
}

.pf__amount { font-weight: lighter; }

.title { text-align: center; }
</style>

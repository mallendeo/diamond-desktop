<template>
  <float-panel class="panel">
    <app-loading v-if="loading" />

    <template v-if="!loading">
      <template v-if="!synced">
        <h1 class="title">{{ $t('delta.title') }}</h1>
        <ol type="1" class="list">
          <li class="list__item" v-html="$t('delta.step1')" />
          <li class="list__item" v-html="$t('delta.step2')" />
          <li class="list__item" v-html="$t('delta.step3')" />
          <li class="list__item" v-html="$t('delta.step4')" />
        </ol>

        <qrcode
          class="qr-code"
          :value="syncToken.token"
          v-if="syncToken && !synced"
          :options="{ size: 200 }"
        ></qrcode>

        <span class="content__msg">
          Waiting for you to scan the QR code. {{ secToExpire }} seconds remaining.
        </span>
      </template>
      
      <template v-if="synced">
        <h2 class="title">Your Delta Portfolios</h2>
        <ul class="list list--wide">
          <li
            class="list__item"
            v-for="portfolio of overviews"
            :key="portfolio.id"
          >
            <el-checkbox class="list__checkbox flex">
              <span class="text--bold">{{ portfolio.name || $t('delta.defaultName') }}</span>
              <span class="pull--right">{{ $n(portfolio.worth, 'currency') }}</span>
            </el-checkbox>
          </li>
        </ul>
      </template>
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
import AppLoading from '@/components/app-loading'

export default {
  components: {
    qrcode: VueQrcode,
    FloatPanel,
    AppLoading
  },

  data () {
    return {
      secToExpire: 0,
      timeout: null,
      loading: true
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

    async syncData () {
      await this.getSyncToken()
      this.loading = false
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

      this.timeout = setTimeout(() => {
        this.checkStatus()
      }, 2000)
    }
  },

  destroyed () {
    clearTimeout(this.timeout)
  },

  computed: {
    ...mapState('delta', ['syncToken', 'syncStatus', 'portfolio', 'overviews']),
    transactions () {
      if (!this.portfolio) return []

      const { transactions: txs } = this.portfolio
      const flatArr = flatten(Object.keys(txs).map(coin => txs[coin]))
      return sortBy(flatArr, ['datetime'])
    },
    synced () {
      return this.syncStatus === 'ENDED'
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
  --sidebar-bg: $c-darker-stormcloud;
  --loading-bg: $c-darker-stormcloud;
  color: white;
  align-items: center;
}

.content__msg {
  opacity: .5;
}

.qr-code {
  border-radius: .5rem;
  padding: .25rem;
  background: white;
  margin: auto;

  border: 1px solid rgba(0,0,0,.1);
}

.list {
  $scope: &;
  font-size: .8rem;

  &__item {
    line-height: 1.5;
  }

  &__checkbox {
    flex: 1;
    padding: 1rem 2rem;
    color: $c-gray;
    align-items: center;

    /deep/ .el-checkbox__label {
      display: flex;
      flex: 1;
    }
  }

  &--wide {
    width: 100%;
    font-size: 1rem;

    #{$scope}__item {
      display: flex;
      cursor: pointer;

      &:nth-of-type(odd) {
        background: rgba(0,0,0,.1);
      }
    }
  }
}

.text--bold {
  font-weight: bold;
}

.pull--right {
  align-self: flex-end;
  margin-left: auto;
}

.title {
  margin: 2.75rem auto;
  text-align: center;
  font-size: 1.5rem;
}

</style>

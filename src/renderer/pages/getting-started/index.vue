<template>
  <app-card>
    <div class="content">
      <p class="mt-2 fs-5 title" v-html="$t('init.welcome')"></p>
      <p class="mt-4 fs-6" v-html="$t('init.gettingStarted')"></p>
      <p class="mt-3 fs-7 note" v-html="$t('init.info')"></p>
    </div>

    <div class="btn-group btn-group--nav">
      <button class="btn" @click="toggleDelta">
        {{ $t('init.importFrom') }} Delta
      </button>
      <button class="btn" @click="toggleBlockfolio">
        {{ $t('init.importFrom') }} Blockfolio
      </button>
      <button class="btn" @click="goToDashboard">
        {{ $t('init.create') }}
      </button>
      <button class="btn" @click="$router.go(-1)">
        {{ $t('ui.goBack') }}
      </button>
    </div>

    <migrate-delta v-if="showDelta" />
    <migrate-blockfolio v-if="showBlockfolio" />
  </app-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import MigrateBlockfolio from './migrate-blockfolio'
import MigrateDelta from './migrate-delta'
import AppCard from '@/components/app-card'

export default {
  components: {
    MigrateBlockfolio,
    MigrateDelta,
    AppCard
  },
  computed: mapState('home', ['showDelta', 'showBlockfolio']),
  methods: {
    ...mapActions('home', ['toggleDelta', 'toggleBlockfolio']),
    ...mapActions('settings', ['initDone']),
    async goToDashboard () {
      await this.initDone()
      this.$router.push('home/create')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/globals';

.content {
  transition: all .2s ease;
  padding: 2rem;
  line-height: 1.4;
  color: var(--text-color-opaque);
}

.title {
  font-weight: bold;
  text-align: center;
}

.note {
  opacity: .75;
}

h1 {
  font-size: 1rem;
  line-height: 1rem;
  display: flex;
  margin-top: 1rem;

  span {
    color: var(--text-color);
  }

  a {
    color: var(--text-color-opaque);
    text-decoration: none;
    font-weight: 200;
    margin-right: .5rem;
  }
}
</style>

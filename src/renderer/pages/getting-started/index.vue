<template>
  <app-card>
    <div class="content">
      <h1>
        <router-link to="/">{{ $t('init.home') }}</router-link>
        <span> / {{ $t('init.title') }}</span>
      </h1>

      <p class="mt-4" v-html="$t('init.welcome')"></p>
      <p class="mt-4 fs-7" v-html="$t('init.gettingStarted')"></p>
      <p class="mt-2 fs-7" v-html="$t('init.info')"></p>
    </div>

    <div class="btn-group btn-group--nav">
      <button class="btn" @click="toggleDelta">
        {{ $t('init.importFrom') }} Delta
      </button>
      <button class="btn" @click="toggleBlockfolio">
        {{ $t('init.importFrom') }} Blockfolio
      </button>
      <button class="btn" @click="() => {}">
        {{ $t('init.create') }}
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
  methods: mapActions('home', ['toggleDelta', 'toggleBlockfolio'])
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/globals';

.content {
  transition: all .2s ease;
  padding: 2rem;
  color: var(--text-color-opaque);
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

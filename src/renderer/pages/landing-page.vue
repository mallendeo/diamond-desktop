<template>
  <app-card class="welcome-card">
    <div
      class="logo-wrapper"
      :class="{ 'logo-wrapper--glow': theme.includes('dark') }"
    >
      <app-logo logoStyle="outline" class="logo" />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 130">
        <g fill="none" fill-rule="evenodd">
          <path stroke="#979797" d="M0.499859876,129.302208 L128.55346,1.24860745"/>
        </g>
      </svg>
    </div>

    <div class="btn-group btn-group--nav flex">
      <router-link
        to="/getting-started"
        class="btn"
      >
        {{ $t('portfolio.create') }}
      </router-link>
      
      <router-link
        to="/restore-backup"
        class="btn"
      >
        {{ $t('portfolio.restore') }}
      </router-link>
    </div>
  </app-card>
</template>

<script>
import { mapState } from 'vuex'

import AppCard from '@/components/app-card'
import AppLogo from '@/components/app-logo'
import FloatPanel from '@/components/float-panel'

export default {
  computed: mapState('settings', ['theme']),
  components: { AppCard, AppLogo, FloatPanel },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/globals';

.welcome-card {
  background: var(--app-bg);
  transition: all .2s ease;
}

$glow-colors: #6501DE, #FF5770, #2EA5FF, #6501DE;
@keyframes glow {
  from { background-position: 0% 50%; }
  to { background-position: 200% 50%; }
}

.logo {
  --fill: $c-purple;
  height: 2.75rem;
  position: relative;

  &-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    margin: auto;

    &--glow:after {
      content: '';
      display: block;
      position: absolute;
      z-index: 0;
      bottom: 0; left: 0;
      width: 100%; height: 100%;
      background: linear-gradient(-45deg, $glow-colors);
      background-size: 200% 100%;
      will-change: background-position;
      animation: glow 2s linear infinite;
      transform: scale(1);
      border-radius: 50%;
      filter: blur(2rem);
    }
  }
}

@media screen and (min-width: $vp-sm) {
  .btn-group {
    margin: auto;
    margin-top: -2rem;
  }

  .btn {
    border-radius: .125rem;
    padding: 1rem 2rem;
    background: transparent;
    margin-bottom: 1rem;
    &:hover {
      border-color: $c-purple;
    }
  }
}
</style>

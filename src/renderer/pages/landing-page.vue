<template>
  <app-card class="welcome-card">
    <div class="logo-wrapper">
      <app-logo logoStyle="outline" class="logo" />
    </div>

    <div class="btn-group flex">
      <router-link
        to="/getting-started"
        class="btn btn--default"
      >
        {{ $t('portfolio.create') }}
      </router-link>
      
      <router-link
        to="/restore-backup"
        class="btn btn--default"
      >
        {{ $t('portfolio.restore') }}
      </router-link>
    </div>
  </app-card>
</template>

<script>
import AppCard from '@/components/app-card'
import AppLogo from '@/components/app-logo'

export default {
  components: { AppCard, AppLogo },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/globals';

.btn {
  text-decoration: none;
  flex: 1;
  margin: 0;
  border-radius: 0;
  font-size: 1rem;
  padding: 2rem;
  color: white;
  background: $c-darker-stormcloud;
  border: none;
  text-shadow: 0 1px 0 rgba(0,0,0,.4);
  &:last-child {
    &:hover {
      background: $c-purple;
    }
  }
  &:hover {
    background: $c-purple;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: $c-dark-gray;
  }
  &-group {
    margin-top: auto;
    flex-direction: column;
  }
}

.welcome-card {
  margin: -2.75rem auto;
  width: 100%;
  height: 100vh;
  background: $c-darkest-stormcloud;
  
}

$glow-colors: #6501DE, #FF5770, #2EA5FF, #6501DE;
@keyframes glow {
  from { background-position: 0% 50%; }
  to { background-position: 200% 50%; }
}
.logo {
  height: 2.75rem;
  --fill: $c-purple;
  position: relative;
  
  &-wrapper {
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;

    &:after {
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

  &__text {
    font-family: 'Comfortaa';
    font-weight: 300;
    margin: .25rem 0 0 1rem;
    color: $c-darker-gray;
  }
}

.text__label {
  color: white;
}
</style>

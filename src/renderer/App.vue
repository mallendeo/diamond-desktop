<template>
  <div id="app" class="wrapper" :class="{
    'theme--dark': theme === 'dark',
    'theme--light': theme === 'light'
  }">
    <header-bar></header-bar>
    <transition name="slide">
      <router-view class="view-wrapper"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderBar from '@/components/header-bar'

export default {
  name: 'diamond-desktop',
  components: { HeaderBar },
  computed: mapGetters('settings', ['theme'])
}
</script>

<style lang="scss">
@import 'assets/scss/main';

.slide-enter-active, .slide-leave-active {
  transition: all .2s ease;
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}

.slide-enter {
  opacity: 0;
  transform: translateX(1rem);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; width: 100vw;
  transition: background .2s ease;
  background: var(--app-bg);

  padding-top: 2.75rem;
}

.view-wrapper {
  position: absolute;
  top: 0;left: 0;
  width: 100%; height: 100%;
}
</style>

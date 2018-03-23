<template>
  <div id="app" v-show="dbLoaded" class="wrapper" :class="{
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
import { mapState, mapActions } from 'vuex'
import HeaderBar from '@/components/header-bar'

export default {
  name: 'diamond-desktop',
  components: { HeaderBar },
  computed: mapState('settings', ['dbLoaded', 'theme']),
  methods: {
    ...mapActions('settings', ['loadSettings'])
  },
  mounted () {
    this.loadSettings()
  }
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
  padding-top: 2.75rem;
  background: var(--app-bg);

  transition: background .2s ease;
  animation: fade-in .5s ease both;
}

.view-wrapper {
  position: absolute;
  top: 0;left: 0;
  width: 100%; height: 100%;
}

@keyframes fade-in {
  from { opacity: 0 }
  to { opacity: 1 }
}
</style>

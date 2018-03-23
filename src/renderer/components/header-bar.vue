<template>
  <header class="header-bar">
    <app-switch @onChange="changeLang" :val="lang !== 'en'" :title="lang" name="lang">
      <div class="icon" slot="icon-off">
        <span>EN</span>
      </div>
      <div class="icon icon--white" slot="icon-on">
        <span>ES</span>
      </div>
    </app-switch>

    <button class="toggle" @click="changeTheme">
      <icon-sun-moon :active="theme === 'dark'" />
    </button>

    <!--<app-switch @onChange="changeTheme" :title="theme" name="theme">
      <svg class="icon" slot="icon-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
        <path d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"/>
        <path d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"/>
        <path d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"/>
        <path d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"/>
        <path d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"/>
        <path d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"/>
        <path d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"/>
        <path d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"/>
        <path d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"/>
      </svg>

      <svg class="icon icon--sm" slot="icon-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
        <path fill="#fff" d="m108.8,27.1c1.6-0.2 2.9-1.4 3.3-3 0.4-1.5-0.1-3.2-1.3-4.2-10.4-8.8-23.7-13.7-37.4-13.7-32.1,8.88178e-16-58.3,26.1-58.3,58.3s26.1,58.3 58.3,58.3c14.4,0 28.3-5.4 39.1-15.1 1.2-1.1 1.6-2.8 1.2-4.3s-1.8-2.6-3.4-2.8c-18.6-2.2-32.7-18-32.7-36.8-0.1-18.5 13.1-33.9 31.2-36.7zm-39.5,36.6c0,19.8 12.8,36.9 31,43-8,5.1-17.3,7.9-26.9,7.9-27.6,0-50-22.5-50-50s22.5-50 50-50c8.9,0 17.6,2.4 25.2,6.8-17.4,6.4-29.3,23-29.3,42.3z"/>
      </svg>
    </app-switch>
    <app-toggle name="theme"></app-toggle>-->
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import AppToggle from './app-toggle'
import AppSwitch from './app-switch'
import IconSunMoon from './icons/icon-sun-moon'

export default {
  components: { AppToggle, AppSwitch, IconSunMoon },
  computed: {
    ...mapGetters('settings', ['lang']),
    ...mapState('settings', ['theme'])
  },
  methods: {
    ...mapActions('settings', ['setLang', 'setTheme']),

    changeLang () {
      if (this.lang !== 'es') return this.setLang('ES_CL')
      this.setLang('EN_US')
    },

    changeTheme () {
      if (this.theme !== 'dark') return this.setTheme('DARK')
      this.setTheme('LIGHT')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/globals';

.header-bar {
  height: 2.5rem;
  width: 100%;
  -webkit-app-region: drag;
  position: fixed;
  top: 0; left: 0;
  z-index: 9;
  padding: 0 .75rem;

  display: flex;
  justify-content: flex-end;
}

.button {
  color: var(--text-color);
  outline: none;
  padding: 0 .5rem;
}

.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  margin-top: -.075rem;
  margin-left: .5rem;
}

.icon {
  transform-origin: center center;
  transform: scale(.7);
  color: var(--text-color);
}
</style>

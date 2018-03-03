<template>
  <div id="app" class="wrapper">
    <header-bar class="header-bar"></header-bar>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar'

export default {
  name: 'diamond-desktop',
  components: { HeaderBar }
}
</script>

<style lang="scss">
@import 'assets/scss/main';
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.1);
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; width: 100vw;
  background: transparent;

  padding-top: 2.75rem;
}
</style>

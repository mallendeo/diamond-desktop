<template>
  <transition name="slide-in">
    <div
      class="float-panel"
      :class="{
        'float-panel--center': typeof center !== 'undefined'
      }"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    center: { type: Boolean, default: false }
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/globals';

.float-panel {
  display: flex;
  flex-direction: column;
  height: 100vh; width: 100vw;
  position: fixed;
  top: 0; left: 0; 
  z-index: 10;
  background: var(--float-panel-bg);

  overflow: hidden;

  &--over {
    $margin: 3rem;
    height: calc(100vh - #{$margin + 1.5rem});
    width: calc(100vw - #{$margin});
    border-radius: .25rem;
    margin: $margin auto auto auto;
    bottom: 0; right: 0;
  }

  &--center {
    align-items: center;
  }
}

.slide-in-enter-active, .slide-in-leave-active {
  transition: all .2s ease;
}

.slide-in-enter, .slide-in-leave-to {
  opacity: 0;
  transform: translateY(20%);
}
</style>

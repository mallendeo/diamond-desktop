<template>
  <div class="float-panel">
    <slot />
  </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/globals';

.float-panel {
  display: flex;
  flex-direction: column;
  height: 100vh; width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--sidebar-bg);
  animation: slide-in .2s ease both;
}

@keyframes slide-in {
  from { opacity: 0; transform: translateY(20%); }
  to { opacity: 1; transform: translateY(0%); }
}
</style>

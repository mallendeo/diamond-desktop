<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/globals';

.card {
  display: flex;
  flex-direction: column;
}
</style>

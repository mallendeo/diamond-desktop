<template>
  <app-card class="card">
    <router-link to="/">Home</router-link>
    <h1>Restore</h1>
  </app-card>
</template>

<script>
import AppCard from '@/components/app-card'

export default {
  components: {
    AppCard
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding-top: 2.7rem;
}
</style>

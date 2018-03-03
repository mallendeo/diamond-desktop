<template>
  <app-card>
    <div class="content">
      <router-link to="/">Home</router-link>
      <h1>Getting started</h1>
      <p class="m-top-1">
        Welcome to <strong>Diamond</strong>.
      </p>

      <p>
        If you have <strong>Delta</strong> or <strong>Blockfolio</strong>,
        you can import all your portfolios using the migration tool.
      </p>

      <button class="btn m-top-1" @click="showDelta = !showDelta">Import from Delta</button>
      <button class="btn" @click="showBf = !showBf">Import from Blockfolio</button>
    </div>

    <migrate-delta v-if="showDelta" />

    <migrate-blockfolio v-if="showBf" />
  </app-card>
</template>

<script>
import MigrateBlockfolio from './migrate-blockfolio'
import MigrateDelta from './migrate-delta'
import AppCard from '@/components/app-card'

export default {
  components: {
    MigrateBlockfolio,
    MigrateDelta,
    AppCard
  },
  data () {
    return {
      showBf: false,
      showDelta: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/globals';

.content {
  transition: all .2s ease;
}

h1 {
  font-family: 'Comfortaa';
}

p {
  color: #444;
}

.m-top-1 {
  margin-top: 1rem;
}
</style>

<template>
  <section>
    <div v-if="init" class="content">
      <h1>Home</h1>
      <router-view></router-view>
      
      <button class="btn mt-7" @click="$router.go(-1)">
        {{ $t('ui.goBack') }}
      </button>
    </div>
  </section>
</template>

<script>
import AppLoading from '@/components/animated/app-loading'
import { mapState, mapActions } from 'vuex'

export default {
  components: { AppLoading },
  computed: mapState('settings', ['init']),
  methods: mapActions('settings', ['loadSettings']),
  async mounted () {
    await this.loadSettings()

    if (!this.init) {
      this.$router.push('start')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

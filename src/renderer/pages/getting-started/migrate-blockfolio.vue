<template>
  <float-panel class="panel">
    <h1>Migrate from Blockfolio</h1>
    <app-loading
      v-if="loading"
      :show-close-btn="true"
      @btnclick="toggleBlockfolio"
    />
    <input v-model="newToken" type="text">
    <button @click="() => getPortfolio()">get</button>
    <pre>{{ token }}</pre>
    <pre>{{ portfolio }}</pre>
    <button class="btn btn--to-bottom" @click="toggleBlockfolio">{{ $t('ui.goBack') }}</button>
  </float-panel>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import FloatPanel from '@/components/float-panel'
import AppLoading from '@/components/app-loading'

export default {
  components: {
    FloatPanel,
    AppLoading
  },
  data () {
    return {
      newToken: null,
      loading: false
    }
  },
  computed: {
    ...mapState('blockfolio', ['token', 'portfolio'])
  },
  methods: {
    ...mapActions('blockfolio', ['getPortfolio', 'setToken']),
    ...mapActions('home', ['toggleBlockfolio'])
  },
  watch: {
    newToken (val) {
      this.setToken(val)
    }
  }
}
</script>

<style>
pre {
  white-space: pre-wrap;
}
</style>

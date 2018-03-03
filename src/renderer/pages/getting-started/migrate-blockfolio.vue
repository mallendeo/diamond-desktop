<template>
  <section>
    <h1>Migrate from Blockfolio</h1>
    <input v-model="newToken" type="text">
    <button @click="() => getPortfolio()">get</button>
    <pre>{{ token }}</pre>
    <pre>{{ portfolio }}</pre>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      newToken: null
    }
  },
  computed: {
    ...mapState('blockfolio', ['token', 'portfolio'])
  },
  methods: {
    ...mapActions('blockfolio', ['getPortfolio', 'setToken'])
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

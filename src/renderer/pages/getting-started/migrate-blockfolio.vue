<template>
  <float-panel class="panel">
    <h1>Migrate from Blockfolio</h1>
    <app-loading
      v-if="loading"
      :show-close-btn="true"
      @btnclick="toggleBlockfolio"
    />

    <ol type="1" class="list list--ordered fs-7">
      <li class="list__item" v-html="$t('blockfolio.step1')" />
      <li class="list__item" v-html="$t('blockfolio.step2')" />
      <li class="list__item" v-html="$t('blockfolio.step3', { code: 384752 })" />
      <li class="list__item" v-html="$t('blockfolio.step4')" />
    </ol>

    <div class="form-group">
      <input
        placeholder="Paste your Blockfolio token"
        class="form-control"
        v-model="newToken"
        type="text"
      >
      <button class="action-btn">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
      </button>
    </div>

    <button @click="() => getPortfolio()">get</button>
    <!--<pre>{{ token }}</pre>
    <pre>{{ portfolio }}</pre>-->
    <button class="btn btn--to-bottom" @click="toggleBlockfolio">{{ $t('ui.goBack') }}</button>
  </float-panel>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import FloatPanel from '@/components/float-panel'
import AppLoading from '@/components/animated/app-loading'

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

<style lang="scss" scoped>
.form-control {
  padding: .75rem 2rem;
  background: var(--c-stormcloud);
  border-radius: .25rem;
  width: 14rem;
  border: none;
  color: white;
  font-size: .75rem;

  transition: all .2s ease;
  z-index: 1;

  &:not(:placeholder-shown), &:focus {
    outline: none;
    background: var(--c-light-stormcloud);
    padding: .75rem 1rem;

    + .action-btn {
      opacity: 1;
      margin-left: .5rem;
    }
  }

  + .action-btn {
    opacity: 0;
    margin-left: -2rem;
    transition: all .2s ease;
    z-index: 0;
  }

  &::placeholder {
    color: #8699A3;
  }
}

.form-group {
  display: flex;
  position: relative;
  margin: auto;
  align-items: center;
}

.action-btn {
  cursor: pointer;
  width: 2rem; height: 2rem;
  background: var(--c-purple);
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
</style>

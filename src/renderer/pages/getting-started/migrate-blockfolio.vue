<template>
  <float-panel center>
    <app-loading
      v-if="loading"
      :show-close-btn="true"
      @btnclick="toggleBlockfolio"
    />

    <h1 class="title mt-5 mb-5 fs-5">{{ $t('blockfolio.title') }}</h1>
    <ol type="1" class="list list--ordered fs-7">
      <li
        class="list__item"
        v-for="(step, i) of $t('blockfolio.steps')"
        v-html="$t(`blockfolio.steps[${i}]`, { code: 384752 })"
        :key="`blockfolio-step-${i}`"
      />
    </ol>

    <div class="form-group">
      <input
        :placeholder="$t('blockfolio.pastePlaceholder')"
        class="form-control"
        v-model="newToken"
        type="text"
      >
      <button class="action-btn" @click="() => getPortfolio()">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
      </button>
    </div>

    <button class="btn btn--to-bottom fs-7" @click="toggleBlockfolio">
      {{ $t('ui.goBack') }}
    </button>
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
.float-panel { color: var(--text-color-light); }

.bottom-action { cursor: pointer; }

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  > * {
    position: absolute;
  }
}

.btn-group {
  align-self: stretch;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  svg {
    margin-right: .5rem;
  }
}

.list /deep/ .link {
  display: inline-block;
  background: var(--c-purple);
  padding: 0 .4rem;
  margin-left: .25rem;
  border-radius: .25rem;
}
</style>

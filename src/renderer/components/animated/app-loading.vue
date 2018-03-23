<template>
  <transition name="fade">
    <div class="loading-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 45"
        class="loading"
      >
        <g fill="none">
          <path
            v-for="(color, i) of colors"
            :key="`loading-path-${i}`"
            :stroke="color"
            class="loading__stroke"
            d="M7.05888138,1.91895406 C7.85896801,0.738059255 9.24093583,0 10.6229037,0 L37.4621734,0 C38.8441413,0 40.1533739,0.738059255 40.8079903,1.99275999 L47.4268888,12.9898429 C48.2997105,14.4659614 48.1542403,16.3111095 47.1359482,17.6396162 L27.1337824,43.4716901 C26.3747253,44.4374877 25.2235714,45 24.006171,45 C22.7887705,45 21.6376166,44.4374877 20.8785596,43.4716901 L0.876393763,17.6396162 C-0.174755086,16.3060704 -0.291042503,14.4475806 0.585453169,12.9898429 L7.05888138,1.91895406 Z"
          />
        </g>
      </svg>

      <button
        @click="$emit('btnclick')"
        class="btn btn--to-bottom fs-7"
        v-if="showCloseBtn"
      >
        {{ $t('ui.goBack') }}
      </button>
    </div>
  </transition>
</template>

<script>
import { tween, styler, easing, stagger } from 'popmotion'

export default {
  data () {
    return {
      colors: [
        '#ffe66d',
        '#ff6b6b',
        '#69306D',
        '#4ecdc4',
        '#02c39a'
      ]
    }
  },
  props: {
    showCloseBtn: { type: Boolean, default: true }
  },
  mounted () {
    const paths = this.$el.querySelectorAll('.loading__stroke')
    const pathStylers = Array.from(paths).map(styler)

    const tweens = [...paths].map(p => tween({
      loop: Infinity,
      duration: 1000,
      ease: easing.easeInOut
    }))

    pathStylers.forEach(p => p.set({ pathLength: 0, pathOffset: 0, opacity: 0 }))

    stagger(tweens, 80)
      .start(values => values.forEach((v = 0, i) =>
        pathStylers[i].set({
          pathLength: v * 100,
          pathOffset: v * 100,
          opacity: 1
        })
      ))
  }
}
</script>

<style lang="scss" scoped>
.loading-wrapper {
  -webkit-app-region: drag;  
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  display: flex;
  background: var(--float-panel-bg);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

svg.loading {
  margin: auto;
  overflow: visible;
  width: 2rem;
}

.loading__stroke {
  stroke-width: .125rem;
}

.btn {
  opacity: .5;
}
</style>

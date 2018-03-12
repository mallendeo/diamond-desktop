<template>
  <svg class="progress-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g class="tick-icon" stroke-width="2" stroke="var(--stroke, #14D790)" fill="none" transform="translate(1, 1.2)">
      <path class="tick-outline-path" d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z" opacity="0" />
      <path class="tick-path" d="M6.173 16.252l5.722 4.228 9.22-12.69" opacity="0"/>
    </g>
  </svg>
</template>

<script>
// Stolen from https://codepen.io/popmotion/pen/yPxNao
import { tween, physics, styler, easing } from 'popmotion'

export default {
  data: () => ({ circleStyler: null, tickStyler: null }),
  props: {
    showTick: { type: Boolean, default: false }
  },
  mounted () {
    this.circleStyler = styler(this.$el.querySelector('.tick-outline-path'))
    this.tickStyler = styler(this.$el.querySelector('.tick-path'))

    tween({ ease: easing.easeIn }).start({
      update: (v) => this.circleStyler.set({
        opacity: v,
        pathLength: v * 45
      }),
      complete: () => physics({ velocity: -400 })
        .start(this.circleStyler.set('rotate'))
    })
  },
  watch: {
    showTick (val) {
      if (!val) return

      tween({
        from: this.circleStyler.get('pathLength'),
        to: 100
      }).start(this.circleStyler.set('pathLength'))

      tween().start((v) => this.tickStyler.set({
        opacity: v,
        pathLength: v * 100
      }))
    }
  }
}
</script>

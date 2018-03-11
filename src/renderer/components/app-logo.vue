<template>
  <svg
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 45"
    class="logo"
    :class="{
      'logo--fill': logoStyle === 'fill',
      'logo--outline': logoStyle === 'outline',
      'logo--white': logoStyle === 'white'
    }"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" x2="91.49%" y1="0%" y2="92.78%">
        <stop offset="0%" stop-color="#36DCFF"/>
        <stop offset="100%" stop-color="#782EFF"/>
      </linearGradient>
    </defs>
    <g fill="none">
      <path
        class="inner"
        d="M7.05888138,1.91895406 C7.85896801,0.738059255 9.24093583,0 10.6229037,0 L37.4621734,0 C38.8441413,0 40.1533739,0.738059255 40.8079903,1.99275999 L47.4268888,12.9898429 C48.2997105,14.4659614 48.1542403,16.3111095 47.1359482,17.6396162 L27.1337824,43.4716901 C26.3747253,44.4374877 25.2235714,45 24.006171,45 C22.7887705,45 21.6376166,44.4374877 20.8785596,43.4716901 L0.876393763,17.6396162 C-0.174755086,16.3060704 -0.291042503,14.4475806 0.585453169,12.9898429 L7.05888138,1.91895406 Z"
      />
      <path
        class="reflection"
        d="M4.41894236,12.7666766 L9.52514539,4.3175231 C9.73208552,3.76748792 10.2398412,3.39406624 10.8187497,3.36616019 C11.3976582,3.33825413 11.9379288,3.66115612 12.195192,4.18881457 C12.4524552,4.71647301 12.3779207,5.34881672 12.0053011,5.79983074 L6.89909811,14.4713304 C6.59939651,14.9214713 6.0861033,15.1749661 5.55257106,15.1363256 C5.01903883,15.0976852 4.54632381,14.7727801 4.31249318,14.2839987 C4.07866256,13.7952174 4.11924075,13.2168175 4.41894236,12.7666766 Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    logoStyle: {
      type: String,
      default: 'white'
    },
    fill: {
      type: String,
      default: '#782EFF'
    }
  }
}
</script>


<style lang="scss" scoped>
.logo {
  overflow: visible;

  &--fill {
    .inner { fill: url(#logo-gradient); }
    .reflection { fill: white; }
  }
  
  &--outline {
    .inner {
      stroke-width: var(--logo-stroke-width, .125rem);
      stroke: var(--logo-stroke, #fff);
    }
  }

  &--white {
    .inner { fill: white; }
    .reflection { fill: var(--logo-fill, white); }
  }
}
</style>

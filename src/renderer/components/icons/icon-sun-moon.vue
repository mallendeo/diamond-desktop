<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 117 116"
    :class="{ 'icon--active': active }"
  >
    <defs>
      <path id="icon-sun-path-1" d="M28.5,56.6 C44,56.6 56.5,44 56.5,28.6 C56.5,13.2 43.9,0.6 28.5,0.6 C13.1,0.6 0.5,13.2 0.5,28.6 C0.5,44 13,56.6 28.5,56.6 Z"/>
      <circle id="icon-sun-path-3" cx="54.7" cy="28.6" r="28"/>
    </defs>
    <g id="icon-sun-moon" fill="none" fill-rule="evenodd" transform="translate(4 4)">
      <g id="sun-moon" transform="translate(26 25)">
        <mask id="icon-sun-mask-2" fill="#fff">
          <use xlink:href="#icon-sun-path-1"/>
        </mask>

        <path
          stroke="var(--color)"
          stroke-width="var(--stroke-width)"
          mask="url(#icon-sun-mask-2)"
          d="M28.5,52.5999985 C41.754167,52.5999985 52.5,41.8276326 52.5,28.5999985 C52.5,15.4091375 41.690861,4.59999847 28.5,4.59999847 C15.309139,4.59999847 4.5,15.4091375 4.5,28.5999985 C4.5,41.8276326 15.245833,52.5999985 28.5,52.5999985 Z"
        />

        <g mask="url(#icon-sun-mask-2)">
          <g class="clip">
            <use fill="var(--color-light)" xlink:href="#icon-sun-path-3"/>
            <circle cx="54.7" cy="28.6" r="24" stroke="var(--color)" stroke-width="var(--stroke-width)"/>
          </g>
        </g>
      </g>
      <g class="rays" stroke="var(--color)" stroke-linecap="round" stroke-width="var(--stroke-width)">
        <path d="M54.5,0 L54.5,13"/>
        <path d="M93.1923882,15 L84,24.1923882"/>
        <path d="M109,54 L96,54"/>
        <path d="M13,54 L0,54" transform="matrix(-1 0 0 1 13 0)"/>
        <path d="M84,83 L93.1923882,92.1923882" transform="rotate(180 88.6 87.6)"/>
        <path d="M16,15 L25.1923882,24.1923882"/>
        <path d="M54,95 L54,108" transform="matrix(1 0 0 -1 0 203)"/>
        <path d="M25.1923882,83 L16,92.1923882" transform="rotate(180 20.6 87.6)"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 1rem;
  --color: var(--c-darkest-stormcloud, #333);
  --color-light: var(--c-almost-white, #fff);
  --stroke-width: 8;
  --transition: all var(--transition-duration, .4s) ease;
  transition: var(--transition);
}

.icon--active {
  --color: #fff;
  transform: scale(1.3);

  .clip {
    circle { fill: var(--c-darkest-stormcloud); }
    transform: translateX(0rem);
  }
}

.icon--active .rays path {
  stroke-dashoffset: 15;
  stroke: var(--color);
}

.clip {
  transform: translateX(1.5rem);
  transition: var(--transition);
}

.rays path {
  transition: var(--transition);
  stroke-dashoffset: 0;
  stroke-dasharray: 15;
}
</style>

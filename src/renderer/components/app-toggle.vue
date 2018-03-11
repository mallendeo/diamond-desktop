<template>
  <label class="toggle-wrapper">
    <input class="toggle__input" type="checkbox" :name="name">
    <div class="toggle"></div>
    <div class="toggle__thumb"></div>    
  </label>
</template>

<script>
export default {
  props: {
    name: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.toggle-wrapper {
  margin: auto 0;
  width: 1.75rem; height: 1rem;
  position: relative;

  div {
    position: absolute;
    top: 0; bottom: 0;
    transition: all .2s ease;
  }
}

.toggle {
  width: 100%; height: 100%;
  border-radius: 1rem;
  left: 0;
  border: 2px solid var(--color-inactive);

  &__thumb {
    width: .5rem; height: .5rem;
    border-radius: 1rem;
    background: var(--color-inactive);
    margin: auto;
    left: .25rem;
  }

  &__input {
    display: none;
  }
}

.toggle__input {
  &:checked {
    ~ .toggle {
      border-color: var(--color-active);

      &__thumb {
        background: var(--color-active);
        transform: translateX(.75rem);
      }
    }

    &:active ~ .toggle__thumb {
      transform: translateX(.5rem);
    }
  }

  &:active ~ .toggle__thumb {
    width: .75rem;
  }
}
</style>

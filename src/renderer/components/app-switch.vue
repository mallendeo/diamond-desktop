<template>
  <label class="switch">
    <input class="switch__input" type="checkbox" :name="name" v-model="cb">
    <div class="icon icon--on">
      <slot name="icon-on" />
    </div>

    <div class="icon icon--off">
      <slot name="icon-off" />
    </div>
  </label>
</template>

<script>
export default {
  props: {
    name: { type: String }
  },
  data () {
    return {
      cb: false
    }
  },
  watch: {
    cb (val) {
      this.$emit('onChange', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  width: 1.25rem; height: 1.25rem;
  position: relative;
  overflow: hidden;
  margin: auto 0;

  &__input {
    display: none;
  }
}

.icon {
  position: absolute;
  width: 100%; height: 100%;
  transition: all .2s ease;
  display: block;

  > * {
    width: 100%; height: 100%;
  }

  &--on {
    transform: translateY(-100%);
    opacity: 0;
  }

  &--off {
    transform: translateY(0rem);
    opacity: 1;
  }
}

.switch__input {
  &:checked {
    ~ .icon--off {
      transform: translateY(100%);
      opacity: 0;
    }
    
    ~ .icon--on {
      transform: translateY(0rem);
      opacity: 1;
    }
  }
}
</style>

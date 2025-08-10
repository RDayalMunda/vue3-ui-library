<template>
  <button class="rdm-button" :disabled="disabled" @click="handleClick" :variant="variant">
    <span class="rdm-button-text" v-if="text">{{ text }}</span>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'RdmButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) =>
        ['primary', 'secondary', 'danger', 'success', 'warning', 'info'].includes(value),
    },
  },
  methods: {
    handleClick() {
      if (typeof this.clickHandler === 'function' && !this.disabled) {
        this.clickHandler()
      }
    },
  },
}
</script>
<style>
@import './RdmButton.css';
</style>

<template>
  <button class="rdm-button" :disabled="disabled" @click="handleClick">
    <span class="rdm-button-text" v-if="text">{{ text }}</span>
    <slot v-else />
  </button>
</template>

<script setup>
const props = defineProps({
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
})

const handleClick = () => {
  if (typeof props.clickHandler === 'function' && !props.disabled) {
    props.clickHandler()
  }
}
</script>

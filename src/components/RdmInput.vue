<template>
  <div class="rdm-input-container">
    <label class="rdm-input-label">{{ label }}</label>
    <input
      class="rdm-input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

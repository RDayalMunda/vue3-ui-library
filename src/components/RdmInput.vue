<template>
  <label class="rdm-input-container">
    <div class="rdm-input-label">{{ label }}</div>
    <input
      :id="id"
      class="rdm-input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="updateValue"
    />
  </label>
</template>

<script>
export default {
  name: 'RdmInput',
  emits: ['update:modelValue'],
  props: {
    id: {
      type: String,
      default: '',
    },
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
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

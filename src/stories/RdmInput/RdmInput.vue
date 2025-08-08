<template>
  <label class="rdm-input-label-container">
    <div class="rdm-input-label">{{ label }}</div>
    <div class="rdm-input-container">
      <input
        :id="id"
        :name="name"
        class="rdm-input"
        :type="inputType"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="updateValue"
      />
      <div v-if="isPassword" class="rdm-input-password-toggle" @click="togglePasswordVisibility">
        {{ passwordText }}
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'RdmInput',
  emits: ['update:modelValue'],
  props: {
    id: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
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
  data() {
    return {
      isPasswordVisible: false,
    }
  },
  computed: {
    isPassword() {
      return this.type === 'password'
    },
    inputType() {
      return this.isPassword ? (this.isPasswordVisible ? 'text' : 'password') : this.type
    },
    passwordText() {
      return this.inputType === 'password' ? 'Hide' : 'Show'
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible
    },
  },
}
</script>
<style>
@import './RdmInput.css';
</style>

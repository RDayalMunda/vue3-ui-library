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
        @input="inputEvent"
        @change="(e) => emitEventHandler(e, 'change')"
        @blur="(e) => emitEventHandler(e, 'blur')"
        @focus="(e) => emitEventHandler(e, 'focus')"
        @keydown="(e) => emitEventHandler(e, 'keydown')"
        @keyup="(e) => emitEventHandler(e, 'keyup')"
        @keypress="(e) => emitEventHandler(e, 'keypress')"
        @paste="(e) => emitEventHandler(e, 'paste')"
        @copy="(e) => emitEventHandler(e, 'copy')"
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
  emits: [
    'update:modelValue',
    'input',
    'change',
    'blur',
    'focus',
    'keydown',
    'keyup',
    'keypress',
    'paste',
    'copy',
  ],
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
    inputEvent(event) {
      this.$emit('update:modelValue', event.target.value)
      this.emitEventHandler(event, 'input')
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible
    },
    emitEventHandler(e, emitName) {
      this.$emit(emitName, e)
    },
  },
}
</script>
<style>
@import './RdmInput.css';
</style>

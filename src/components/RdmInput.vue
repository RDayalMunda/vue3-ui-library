<template>
  <div class="rdm-input-container">
    <label class="rdm-input-label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
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
import { computed, useId } from 'vue'

defineOptions({
  name: 'RdmInput',
})

const props = defineProps({
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
})

const emit = defineEmits(['update:modelValue'])

const uniqueId = useId()

const inputId = computed(() => props.id || uniqueId)

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

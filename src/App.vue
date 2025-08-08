<template>
  <div>
    <h1>Hellow World</h1>
    <div style="display: flex; flex-direction: column; gap: 10px; padding: 50px">
      <RdmInput v-model="name" label="Name" placeholder="Enter your name" />
      <RdmButton text="Click me" :clickHandler="handleClick" />
    </div>
  </div>
</template>

<script setup>
import RdmInput from './components/RdmInput.vue'
import RdmButton from './components/RdmButton.vue'
import { ref } from 'vue'

const name = ref('')
function handleClick() {
  console.log('clicked', name.value)
}
</script>

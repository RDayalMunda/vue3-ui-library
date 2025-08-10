<template>
  <div class="main-container">
    <h1>Hellow World</h1>
    <div class="container">
      <pre class="models">
name = {{ name }}
password = {{ password }}
    </pre
      >
      <RdmInput v-model="name" label="Name" placeholder="Enter your name" />
      <RdmInput
        v-model="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
      />

      <RdmButton text="Click me" :clickHandler="handleClick" />
      <RdmButton text="Can't click me" :disabled="true" />
    </div>
  </div>
</template>

<script setup>
import RdmInput from './stories/RdmInput/RdmInput.vue'
import RdmButton from './stories/RdmButton/RdmButton.vue'
import { ref } from 'vue'

const name = ref('')
const password = ref('')
function handleClick() {
  console.log('clicked: ', name.value, password.value)
}

function focusHandler() {
  console.log('focus')
}

function blurHandler() {
  console.log('blur')
}
</script>
<style scoped>
.main-container {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ffffff;
}
.models {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

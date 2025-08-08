<template>
  <div>
    <h1>Hellow World</h1>
    <RdmInput v-model="name" label="Name" placeholder="Enter your name" />
  </div>
</template>

<script setup>
import RdmInput from './components/RdmInput.vue'
import { ref } from 'vue'

const name = ref('')
</script>

<template>
  <div class="main-container">
    <h1>Hellow World</h1>
    <div class="container">
      <pre class="models"></pre>
      <RdmButtonGroup :isDisabledAll="false">
        <RdmButton text="First Button" :clickHandler="handleClick" />
        <RdmButton text="Second Button" :clickHandler="handleClick" variant="success" />
        <RdmButton text="Third Button" :clickHandler="handleClick" variant="danger" />
        <RdmButton
          text="Fourth Button"
          :clickHandler="handleClick"
          variant="danger"
          :disabled="true"
        />
        <RdmButton text="Fifth Button" :clickHandler="handleClick" variant="warning" />
        <RdmButton text="Sixth Button" :clickHandler="handleClick" variant="info" />
      </RdmButtonGroup>
    </div>
  </div>
</template>

<script setup>
import RdmButton from './stories/RdmButton/RdmButton.vue'
import RdmButtonGroup from './stories/RdmButtonGroup/RdmButtonGroup.vue'
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

<template>
  <div class="rdm-button-group">
    <fieldset :disabled="isDisabledAll" class="rdm-button-group-fieldset">
      <template v-for="btn in buttonList" :key="btn.text">
        <RdmButton
          :text="btn.text"
          :clickHandler="btn.clickHandler"
          :variant="btn.variant"
          :disabled="btn.disabled"
        />
      </template>
      <slot v-if="!buttonList.length" />
    </fieldset>
  </div>
</template>
<script setup>
const props = defineProps({
  isDisabledAll: {
    type: Boolean,
    default: false, // to disable all the buttons inside this group
  },
  buttonList: {
    type: Array,
    default: () => [],
  },
})
</script>
<style>
@import './RdmButtonGroup.css';
</style>

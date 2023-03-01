<template>
  <div :class="$style.wrapper">
    <Icon name="carbon:moon" size="24" />
    <input
      :class="$style.range"
      type="range"
      min="0"
      max="1"
      step="0.01"
      :value="state"
      @input="onInput($event)">
    <Icon name="carbon:sun" size="24" />
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update'])
defineProps<{
  state: any
}>()

const onInput = (event: any) => {
  emit('update', { key: 'dim', value: parseFloat(event.target.value) })
}
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  width: 100%;
  gap: var(--spacing);
}

.range {
  background: transparent;
  -webkit-appearance: none;
  width: 100%;

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: var(--white);
    border: 1px solid var(--grey-100);
    border-radius: var(--radius);
    box-shadow: 0px 1px 4px var(--grey-200);
    cursor: pointer;
    height: var(--spacing-xl);
    margin-top: calc(var(--spacing) * -1);
    width: var(--spacing-xl);
  }

  &::-webkit-slider-runnable-track {
    background-color: var(--grey-100);
    border-radius: var(--radius);
    height: var(--spacing);
  }

  &:focus {
    outline: none;
  }
}
</style>

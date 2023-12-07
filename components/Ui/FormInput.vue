<template>
  <label :class="$style['input']">
    <span v-if="label" :class="$style['input__label']">{{ label }}</span>
    <input :type="type" :class="$style['input__input']" :placeholder="placeholder">
  </label>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String
  },
  placeholder: {
    type: String
  }
})
</script>
<style lang="scss" module>
.input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  &__label {
    font-size: 1.4rem;
    color: var(--grey-300);

  }

  &__input {
    appearance: none;
    background-color: var(--grey-800);
    border: 1px solid var(--grey-800);
    border-radius: var(--radius);
    color: var(--white);
    outline: none;
    padding: var(--spacing-l);

    &:hover,
    &:focus {
      border-color: var(--grey-600);
    }
  }
}
</style>

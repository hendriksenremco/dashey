<template>
  <button :class="[$style.button, { [$style[`button--${color}`]]: props.color }, { [$style[`button--round`]]: props.round }]">
    <slot />
  </button>
</template>
<script setup lang="ts">

const props = defineProps<{
  color?: String | Boolean
  round?: Boolean
  iconOnly?: boolean
}>()
</script>
<style lang="scss" module>
.button {
  background-color: var(--grey--700);
  border: 1px solid var(--grey-500);
  border-radius: var(--radius);
  color: var(--white);
  cursor: pointer;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing) var(--spacing-l);

  &:hover {
    background-color: var(--grey-600);
  }

  &--primary {
    background-color: var(--primary);

    &:hover {
      background-color: var(--primary-400);
    }
  }

  &--yellow {
    background-color: var(--yellow);

    &:hover {
      background-color: var(--yellow-400);
    }
  }

  &--round {
    border-radius: 100%;
    width: var(--spacing-xxl);
    height: var(--spacing-xxl);
    padding: 0;
  }
}
</style>

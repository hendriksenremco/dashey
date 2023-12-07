<template>
  <button :class="[$style.button, { [$style[`button--${color}`]]: props.color }, { [$style[`button--round`]]: props.round }, { [$style[`button--${shape}`]]: props.shape }]">
    <Icon v-if="iconLeft" :class="$style['button__icon--left']" :name="iconLeft" />
    <slot />
    <Icon v-if="iconRight" :class="$style['button__icon--right']" :name="iconRight" />
  </button>
</template>
<script setup lang="ts">

const props = defineProps<{
  color?: string | boolean
  round?: boolean
  iconLeft?: string
  iconRight?: string
  shape?: string
}>()
</script>
<style lang="scss" module>
.button {
  background-color: var(--grey-600);
  border: 1px solid var(--grey-600);
  border-radius: var(--radius);
  color: var(--white);
  cursor: pointer;
  appearance: none;
  display: flex;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  padding: var(--spacing) var(--spacing-l);
  outline: none;

  &:hover {
    background-color: var(--grey-500);
    border-color: var(--grey-500);
  }

  &__icon {
    &--left {
      margin-right: var(--spacing);
      margin-left: calc(var(--spacing) * -1);
    }

    &--right {
      margin-left: var(--spacing);
      margin-right: calc(var(--spacing) * -1);
    }
  }

  &--primary {
    background-color: var(--primary-700);
    color: var(--primary-300);
    border-color: var(--primary-700);

    &:hover {
      background-color: var(--primary-600);
      border-color: var(--primary-600);
    }
  }

  &--red {
    background-color: var(--red-500);
    border-color: var(--red-500);
    color: var(--red-50);

    &:hover {
      background-color: var(--red-400);
      border-color: var(--red-400);
    }
  }

  &--yellow {
    background-color: var(--yellow);

    &:hover {
      background-color: var(--yellow-400);
    }
  }

  &--white {
    background-color: var(--grey-50);
    color: var(--black);

    &:hover {
      background-color: var(--grey-100);
    }
  }

  &--round {
    border-radius: 100%;
    width: var(--spacing-xxl);
    height: var(--spacing-xxl);
    padding: 0;
  }

  &--pill {
    border-radius: 9999px;
  }
}
</style>

<template>
  <div :class="[$style.thing, { [$style['thing--disabled']]: disabled }, { [$style['thing--no-padding']]: noPadding }, { [$style['thing--state-on']]: state === 'on' }]">
    <h4 v-if="$props.title" :class="$style.thing__title">
      {{ $props.title }}
    </h4>
    <h5 v-if="$props.subtitle" :class="$style.thing__subtitle">
      {{ $props.subtitle }}
    </h5>
    <div v-if="loading">
      {{ loading }}
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
useAttrs()
defineEmits(['dragstart'])
defineProps<{
  title?: String,
  subtitle?: String,
  disabled?: String,
  noPadding?: Boolean,
  state?: String
  loading?: Boolean
}>()

</script>

<style lang="scss" module>
.thing {
  border: 1px solid var(--black);
  background-color: rgba(0, 0, 0, 0.4);
  color: var(--white);
  border-radius: var(--thing-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing);
  user-select: none;
  container: thing / inline-size;

  &--no-padding {
    padding: 0;
    overflow: hidden;
  }

  &--disabled {
    pointer-events: none;
  }

  &--state-on {
    background-color: var(--white);
    color: var(--grey-600);
  }

  &__title {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1;
  }

  &__subtitle {
    color: var(--fg-color-muted);
    font-weight: var(--font-weight-normal);
    text-align: left;
    font-size: 1rem;
    line-height: 1;
  }
}
</style>

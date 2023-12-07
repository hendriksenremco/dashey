<template>
  <div :class="[$style['modal'], {[$style['modal--with-padding']]: padding}]">
    <div :class="$style['modal__backdrop']" @click="$emit('closed')" />
    <div :class="$style['modal__content']">
      <div :class="$style['modal__title']">
        {{ title }}
        <Button round @click="$emit('closed')">
          <Icon size="24" name="carbon:close" />
        </Button>
      </div>
      <div :class="$style['modal__body']">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineEmits(['closed'])
defineProps<{
    title?: string,
    padding: boolean
}>()
</script>
<style lang="scss" module>
.modal {
  align-items: center;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  &--with-padding {
    .modal__body {
      padding: var(--spacing-l);
    }
  }

  &__backdrop {
    background-color: rgba(0, 0, 0, .2);
    backdrop-filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &__content {
    background-color: var(--grey-700);
    border-radius: var(--thing-radius);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, .2);
    position: relative;
    z-index: 2;
    height: 800px;
    width: 1000px;
    max-height: 70vh;
    max-width: 90vw;
    padding-top: 54px;
  }

  &__title {
    border-bottom: 1px solid var(--grey-600);
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    justify-content: space-between;
    padding: var(--spacing-l);
    height: 54px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__body {
    height: 100%;
  }
}
</style>

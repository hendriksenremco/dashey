<template>
  <nav :class="$style['toolbar']">
    <div :class="$style['toolbar__inner']">
      <NuxtLink :to="{name: 'index'}" :active-class="$style['toolbar__item--active']" :class="[$style['toolbar__item']]">
        Home
      </NuxtLink>
      <div :class="$style['toolbar__item']">
        Lampen
      </div>
      <div :class="$style['toolbar__item']">
        Klimaat
      </div>
      <div :class="$style['toolbar__item']">
        Motion
      </div>
      <div v-if="editMode" :class="$style['toolbar__item']">
        <Icon name="carbon:add" size="24" />
      </div>
    </div>
  </nav>
</template>
<script setup>
const { editMode } = useGrid()
</script>
<style lang="scss" module>
.toolbar {
  align-items: center;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;
  width: 100%;
  z-index: 1000;
  gap: var(--spacing-xl);
  pointer-events: none;

  &__inner {
    background-color: rgba(0, 0, 0, .8);
    backdrop-filter: blur(4px);
    border-radius: 9999px;
    display: flex;
    padding: var(--spacing);
    pointer-events: all;
    user-select: none;
  }

  &__item {
    border-radius: 9999px;
    color: var(--grey-200);
    cursor: pointer;
    padding: var(--spacing) var(--spacing-l);
    text-decoration: none;

    &:hover:not(.toolbar__item--active) {
      color: var(--white);
    }

    &--active {
      background-color: var(--white);
      color: var(--black);
    }
  }

}
</style>

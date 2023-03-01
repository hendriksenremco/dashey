<template>
  <nav :class="$style['toolbar']">
    <div :class="$style['toolbar__inner']">
      <div v-for="page in pages" :key="page.id" :class="[$style['toolbar__item'],{[$style['toolbar__item--active']]: page.id === activeGrid}]">
        {{ page.name }}
      </div>
      <div v-if="editMode" :class="$style['toolbar__item']" @click="add">
        <Icon name="carbon:add" size="24" />
      </div>
    </div>
  </nav>
</template>
<script setup>
const { editMode, activeGrid } = useGrid()
const { addPage, pages } = usePages()

const add = () => {
  const text = prompt('Scherm naam?')
  if (text) {
    addPage({ name: text })
  }
}
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

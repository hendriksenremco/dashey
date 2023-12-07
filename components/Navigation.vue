<template>
  <nav :class="$style['toolbar']">
    <div :class="$style['toolbar__inner']">
      <a v-for="page in pages" :key="page.id" :href="`#${page.id}`" :class="[$style['toolbar__item'],{[$style['toolbar__item--active']]: page.id === activeGrid}]">
        {{ page.name }}
        <Button v-if="editMode" round color="red" :class="$style['toolbar__delete']" @click.stop="remove(page)">
          <Icon name="carbon:close" />
        </Button>
      </a>
      <Button v-if="editMode" :class="$style['toolbar__add']" round @click="add">
        <Icon name="carbon:add" size="24" />
      </Button>
    </div>
  </nav>
</template>
<script setup>
const { editMode, activeGrid } = useGrid()
const { addPage, removePage, pages } = usePages()

const add = () => {
  const text = prompt('Scherm naam?')
  if (text) {
    addPage({ name: text })
  }
}

const remove = async page => {
  if (confirm('Pagina verwijderen?')) {
    removePage({ id: page.id })
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

  &__add {
    margin-left: var(--spacing);
  }

  &__delete {
    margin-left: var(--spacing);
    margin-right: calc(var(--spacing) * -1);
    width: var(--spacing-xl);
    height: var(--spacing-xl);
  }

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
    display: inline-flex;
    align-items: center;
    padding: var(--spacing) var(--spacing-l);
    text-decoration: none;

    &:hover:not(.toolbar__item--active) {
      color: var(--white);
    }

    &--active {
      background-color: var(--grey-50);
      color: var(--black);
    }
  }

}
</style>

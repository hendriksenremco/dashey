<template>
  <div ref="gridEl" class="grid-stack">
    <div
      v-for="savedItem in itemsForGrid(id)"
      :id="savedItem.id"
      :key="savedItem.id"
      class="grid-stack-item ui-resizable"
      :gs-id="savedItem.id"
      :gs-min-w="savedItem.minW"
      :gs-min-h="savedItem.minH"
      :gs-max-w="savedItem.maxW"
      :gs-max-h="savedItem.maxH"
      :gs-w="savedItem.w"
      :gs-h="savedItem.h"
      :gs-x="savedItem.x"
      :gs-y="savedItem.y"
      :draggable="editMode">
      <div class="grid-stack-item-content">
        <div v-if="!getComponentById(savedItem.id)">
          <Icon name="carbon:rotate" size="24" />
        </div>
        <component :is="getComponentById(savedItem.id)" :id="savedItem.id" />
      </div>
    </div>
    <div class="trash" :class="[ {'trash--show': showTrash}, 'trash-' + id ]">
      <Icon name="carbon:trash-can" size="32" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { getComponentById } = useDashey()
const { save, itemsForGrid } = useGridStore()
const { init, editMode } = useGrid()
const showTrash = ref(false)
const gridEl = ref(null)
let grid: any = null

const props = defineProps<{
  id: Number
}>()

watch(editMode, () => {
  if (editMode.value) {
    grid.enable()
  } else {
    grid.disable()
  }
})

onMounted(() => {
  grid = init({
    class: 'grid-' + props.id,
    animate: false,
    acceptWidgets: true,
    float: true,
    column: 8,
    cellHeight: '120px',
    dragIn: '.grid-stack-item',
    dragInOptions: { helper: 'clone' },
    removable: '.trash-' + props.id,
    styleInHead: true,
    alwaysShowResizeHandle: true
  }, gridEl.value)

  grid.on('change', async () => {
    const gridItems = await grid.save()
    await save(gridItems, props.id)
  })

  grid.on('added', async () => {
    showTrash.value = false
    const gridItems = await grid.save()
    await save(gridItems, props.id)
  })

  grid.on('dragstart', () => {
    showTrash.value = true
  })
  grid.on('dragstop', async () => {
    showTrash.value = false
    const items = await grid.save()
    await save(items, props.id)
  })
})

</script>
<style lang="scss" scoped>
.grid-stack {
  height: 100%;
}

.grid-stack>.grid-stack-item>.grid-stack-item-content {
  container: grid-item / inline-size;
  overflow: hidden;
  box-sizing: padding-box;

}

.grid-stack-item-removing {
  filter: grayscale(1);
  transform: scale(0.8);
}

.toolbar {
  background-color: var(--white);
  display: flex;
  gap: var(--spacing);
  padding: var(--spacing);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  overflow-x: hidden;
  z-index: 2;
  transform: translateY(-100%);
  transition: transform 1s ease;

  &__inner {
    display: flex;
    gap: var(--spacing);

    &>* {

      width: calc(100vw / 12);
    }

    .grid-stack-item-content {
      height: 100%;
    }
  }

  &--show {
    transform: translateY(0);
  }

}

.trash {
  background-color: var(--red-200);
  color: var(--red-500);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translateY(150%);
  transition: transform 1s ease;
  z-index: 100;

  &--show {
    transform: translateY(0)
  }
}
</style>

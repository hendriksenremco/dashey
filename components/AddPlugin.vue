<template>
  <div :class="$style['add-plugin']">
    <div :class="$style['add-plugin__sidebar']">
      <h4 :class="$style['add-plugin__title']">
        Plugins
      </h4>
      <div v-for="plugin in plugins" :key="plugin.name" :class="[$style['add-plugin__sidebar__item'],{[$style['add-plugin__sidebar__item--active']]: selectedPlugin && selectedPlugin.id === plugin.id}]" @click="selectedPlugin = plugin">
        <img v-if="plugin.icon" :src="plugin.icon" :class="$style['add-plugin__sidebar__icon']">
        {{ plugin.name }}
        <Icon :class="$style['add-plugin__sidebar__arrow']" name="carbon:arrow-right" />
      </div>
    </div>
    <div :class="$style['add-plugin__content']">
      <div :class="$style['add-plugin__things']">
        <div
          v-for="thing in filteredThings"
          :key="thing.id"
          :gs-id="thing.id"
          :gs-min-w="thing.minWidth"
          :gs-max-w="thing.maxWidth"
          :gs-max-h="thing.maxHeight"
          @click.stop="addThing(thing)">
          <component :is="thing.component" :id="thing.id" :disabled="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { plugins, things } = useDashey()
const { add } = useGridStore()
const { rerender, activeGrid } = useGrid()
const selectedPlugin: Ref<DasheyPlugin | null> = ref(null)
const filteredThings = computed(() => {
  return things.filter(things => {
    if (!selectedPlugin.value) { return false }
    return things.pluginId === selectedPlugin.value.id
  })
})

const addThing = async thing => {
  thing.gridId = activeGrid.value
  add(thing)
  await rerender()
}
</script>
<style lang="scss" module>
.add-plugin {
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100%;

  &__title {
    color: var(--grey-400);
    padding: var(--spacing) 0;
  }

  &__content {
    padding: var(--spacing-l);
  }

  &__sidebar {
    border-right: 1px solid var(--grey-600);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    padding: var(--spacing-l);

    &__item {
      background-color: var(--grey-700);
      border-radius: var(--thing-radius);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: var(--spacing-l);

      &:hover:not(.add-plugin__sidebar__item--active) {
        background-color: var(--grey-600);
        color: var(--white);
      }

      &--active {
        background-color: var(--white);
        color: var(--black);
      }
    }

    &__icon {
      width: var(--spacing-xl);
      margin-right: var(--spacing-l);
    }

    &__arrow {
      margin-left: auto;
    }
  }

  &__content {
    overflow-y: auto;
  }

  &__things {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: var(--spacing-l);
  }
}
</style>

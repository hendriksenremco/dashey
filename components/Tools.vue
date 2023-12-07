<template>
  <div>
    <Modal v-if="showModal" title="Ding toevoegen" @closed="showModal = false">
      <AddPlugin />
    </Modal>
    <div :class="$style['tools']">
      <NuxtLink v-if="editMode" :to="{name: 'settings'}" :active-class="$style['toolbar__item--active']" :class="$style['toolbar__item']">
        <Button :round="true">
          <Icon name="carbon:settings" size="24" />
        </Button>
      </NuxtLink>
      <Button v-if="editMode" :class="$style['tools__item']" :round="true" @click="showModal = true">
        <Icon size="24" name="carbon:add" />
      </Button>
      <Button v-if="!editMode" :class="$style['tools__item']" icon-right="carbon:pen" @click="editMode = !editMode">
        Bewerk
      </Button>
      <Button v-else :round="true" :class="$style['tools__item']" @click="editMode = !editMode">
        <Icon size="24" name="carbon:checkmark" />
      </Button>
    </div>
  </div>
</template>
<script setup>
const { editMode } = useGrid()
const showModal = ref(false)
</script>
<style lang="scss" module>
.tools {
    cursor: pointer;
    align-items: center;
    display: inline-flex;
    margin: 0 auto;
    padding: calc(var(--spacing) * 1.5);
    gap: var(--spacing);
    position: fixed;
    right: var(--spacing-l);
    bottom: var(--spacing-l);

    &__item {}
}
</style>

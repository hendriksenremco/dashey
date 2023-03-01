<template>
  <div>
    <Grid v-if="updateKey" />
    <Tools />
  </div>
</template>
<script setup>

const { updateKey, editMode } = useGrid()
</script>
<style lang="scss" module>
.edit {
  position: fixed;
  bottom: var(--spacing-l);
  right: var(--spacing-l);
}
</style>

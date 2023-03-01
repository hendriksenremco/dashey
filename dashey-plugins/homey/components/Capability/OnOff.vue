<template>
  <div>
    <Button :color="state ? 'yellow' : undefined" :round="true" @click="toggleOnOff()">
      <Icon name="carbon:power" size="24" />
    </Button>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update'])
const props = defineProps<{
  state: String
}>()

const toggleOnOff = () => {
  emit('update', { key: 'onoff', value: !props.state })
}
</script>

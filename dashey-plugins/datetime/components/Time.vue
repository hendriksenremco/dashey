<template>
  <Thing :class="$style['time']">
    {{ hoursMin }}
  </Thing>
</template>
<script setup lang="ts">
const currentDate = ref(null)
currentDate.value = new Date()
const hoursMin = computed(() => {
  return currentDate.value.toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  })
})

const interval = setInterval(() => {
  currentDate.value = new Date()
}, 1000)

onUnmounted(() => {
  clearInterval(interval)
})
</script>
<style lang="scss" module>
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 200;

  @container grid-item (min-width: 1px) {
    font-size: max(2.2rem, 12cqw);
  }
}
</style>

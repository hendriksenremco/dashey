<template>
  <Thing :class="$style['time']">
    {{ dateString }}
  </Thing>
</template>
<script setup lang="ts">
const currentDate = ref()
currentDate.value = new Date()
const dateString = computed(() => {
  return currentDate.value.toLocaleDateString('nl-NL', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
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
  font-weight: 700;
  text-align: center;

  @container grid-item (min-width: 1px) {
    font-size: max(1.1rem, 7cqw);
  }
}
</style>

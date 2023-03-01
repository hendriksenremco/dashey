<template>
  <Thing :class="$style['time']">
    <time :class="$style['time__time']">{{ hoursMin }}</time>
    <div :class="$style['time__date']">
      {{ dateString }}
    </div>
  </Thing>
</template>
<script setup lang="ts">
const currentDate = ref()
currentDate.value = new Date()
const hoursMin = computed(() => {
  return currentDate.value.toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  })
})
const dateString = computed(() => {
  return currentDate.value.toLocaleDateString('nl-NL', {
    year: 'numeric', month: 'long', day: 'numeric'
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
    font-size: max(1.1rem, 6cqw);
  }

  &__time {
    font-size: 2em;
    font-weight: 200;
    line-height: 1;
  }
}
</style>

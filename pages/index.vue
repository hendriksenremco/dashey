<template>
  <div ref="root" :class="$style['pages']">
    <div v-for="page in pages" :id="page.id" :key="page.id" ref="grids" :class="$style['page']">
      <Grid v-if="updateKey" :id="page.id" />
    </div>
  </div>
  <Tools />
</template>
<script setup>
const { updateKey, setActiveGrid } = useGrid()
const { pages } = usePages()
const grids = ref([])
const root = ref(null)

onMounted(() => {
  const onIntersect = events => {
    events.forEach(event => {
      if (!event.isIntersecting) { return false }
      setActiveGrid(parseInt(event.target.getAttribute('id')))
    })
  }

  const observer = new IntersectionObserver(onIntersect, {
    root: root.value,
    threshold: 1,
    rootMargin: '100px'
  })

  grids.value.forEach(el => {
    observer.observe(el)
  })
})
</script>
<style lang="scss" module>
.pages {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
}

.page {
  width: 100vw;
  height: 100vh;
  flex: 0 0 100vw;
  scroll-snap-align: start;
}
</style>

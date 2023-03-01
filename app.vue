<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
import { buienradarPlugin } from '~/dashey-plugins/buienradar'
import { datetimePlugin } from '~/dashey-plugins/datetime'
// import { homeyPlugin } from '~/dashey-plugins/homey'
const { registerPlugin, initialize } = useDashey()

registerPlugin(buienradarPlugin())
registerPlugin(datetimePlugin())
// registerPlugin(homeyPlugin())
initialize()
</script>

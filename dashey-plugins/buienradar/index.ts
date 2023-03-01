import { defineAsyncComponent } from 'vue'
import icon from './assets/icon.svg'
const { addThing } = useDashey()

export const buienradarPlugin = (): DasheyPlugin => {
  const name = 'Buienradar'
  const pluginId = 'buienradar'

  const initialize = () => {
    addThing({
      id: 'buienradar-next-3-hours',
      name: 'Komende 3 uur',
      pluginId,
      categories: ['weer', 'buienradar'],
      maxWidth: 3,
      maxHeight: 3,
      component: markRaw(defineAsyncComponent(() => import('./components/NextThreeHours.vue')))
    })
  }

  return { initialize, name, id: pluginId, icon }
}

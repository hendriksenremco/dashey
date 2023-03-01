import { defineAsyncComponent } from 'vue'
import icon from './assets/icon.svg'
const { addThing } = useDashey()

export const datetimePlugin = (): DasheyPlugin => {
  const name = 'Datum & tijd'
  const pluginId = 'datetime'

  const initialize = () => {
    addThing({
      id: 'time',
      pluginId,
      name: 'Klok',
      categories: ['tijd', 'datum'],
      minWidth: 1,
      maxWidth: 3,
      maxHeight: 2,
      component: markRaw(defineAsyncComponent(() => import('./components/Time.vue')))
    })
    addThing({
      id: 'date',
      pluginId,
      name: 'Datum',
      categories: ['tijd', 'datum'],
      minWidth: 1,
      maxWidth: 3,
      maxHeight: 2,
      component: markRaw(defineAsyncComponent(() => import('./components/Date.vue')))
    })
    addThing({
      id: 'datetime',
      pluginId,
      name: 'Datum + tijd',
      categories: ['tijd', 'datum'],
      minWidth: 1,
      minHeight: 1,
      maxWidth: 3,
      maxHeight: 2,
      component: markRaw(defineAsyncComponent(() => import('./components/DateTime.vue')))
    })
  }
  return { initialize, name, id: pluginId, icon }
}

import { useHomey } from './composables/useHomey'
import icon from './assets/icon.webp'
const { login, getDevices, connect } = useHomey()
const { addThing } = useDashey()

export const homeyPlugin = (): DasheyPlugin => {
  const name = 'Homey'
  const pluginId = 'homey'

  const initialize = async () => {
    await login()
    await getDevices()
    await connect()
    await install()
  }

  const install = async () => {
    await login()
    const devices: Array<any> = await getDevices()

    devices.forEach((device: any) => {
      addThing({
        pluginId,
        id: device.id,
        name: device.name,
        categories: ['homey'],
        maxWidth: 2,
        maxHeight: 2,
        component: markRaw(defineAsyncComponent(() => import('./components/Device.vue')))
      })
    })
  }
  return { name, id: pluginId, icon, initialize, install }
}

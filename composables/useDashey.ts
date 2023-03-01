const plugins : DasheyPlugin[] = reactive([])
const things : DasheyThing[] = reactive([])

export const useDashey = () => {
  const addThing = (thing: DasheyThing) => {
    things.push(thing)
  }

  const getComponentById = (thingId: string) => {
    if (!things.length) { return false }
    const found = things.find(thing => thing.id === thingId)
    return found ? found.component : false
  }

  const registerPlugin = (plugin: any) => {
    plugins.push(plugin)
  }

  const initialize = () => {
    plugins.forEach(plugin => {
      plugin.initialize()
    })
  }

  return { addThing, registerPlugin, initialize, getComponentById, plugins, things }
}

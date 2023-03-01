interface DasheyThing {
    id: string
    name: string
    pluginId: string,
    categories?: Array
    maxWidth: Number
    maxHeight: Number
    minWidth?: Number
    minHeight?: Number
    settings?: Array
    capabilities?: Array
    component: defineAsyncComponent
}

interface DasheyCategory {
    name: string
    key: string
    plugin: string
}

interface DasheyPlugin {
    initialize: Function,
    name: string,
    id: string,
    icon?: string,
    install?: Function
}
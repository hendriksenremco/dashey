import { GridStack } from 'gridstack'
import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
let grid: any = null
const updateKey = ref(true)
const editMode = ref(true)

export const useGrid = () => {
  const init = (options:any) => {
    grid = GridStack.init(options)
    return grid
  }

  const rerender = async () => {
    console.log('rerender')
    updateKey.value = false
    await nextTick()
    updateKey.value = true
  }

  return { init, rerender, grid, updateKey, editMode }
}

import { GridStack } from 'gridstack'
import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
const grids: any = []
const updateKey = ref(true)
const editMode = ref(false)
const activeGrid = ref(0)

export const useGrid = () => {
  const init = (options:any, el: any) => {
    const grid = GridStack.init(options, el)
    grids.push(grid)
    return grid
  }

  const rerender = async () => {
    updateKey.value = false
    await nextTick()
    updateKey.value = true
  }

  const setActiveGrid = id => {
    activeGrid.value = id
  }

  return { init, rerender, setActiveGrid, activeGrid, grids, updateKey, editMode }
}

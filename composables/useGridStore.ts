import { useStorage } from '@vueuse/core'

export const useGridStore = () => {
  const add = item => {
    const saved: Ref<any> = useStorage('grid' + item.gridId, [], localStorage)
    saved.value.push({
      id: item.id,
      maxW: item.maxWidth,
      maxH: item.maxHeight,
      minW: item.minWidth,
      minH: item.minHeight
    })
  }

  const save = (items: any, gridId: Number) => {
    const saved: Ref<any> = useStorage('grid' + gridId, [], localStorage)
    saved.value = items.map(item => {
      return {
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
        maxW: item.maxW,
        maxH: item.maxH,
        id: item.id
      }
    })
  }

  const itemsForGrid = (gridId: Number) => {
    const saved: Ref<any> = useStorage('grid' + gridId, [], localStorage)
    return saved.value
  }

  return { save, add, itemsForGrid }
}

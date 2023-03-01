import { useStorage } from '@vueuse/core'

export const useStore = () => {
  const saved: Ref<any> = useStorage('grid', {}, localStorage, { mergeDefaults: true })

  const add = item => {
    saved.value.push({
      id: item.id,
      maxW: item.maxWidth,
      maxH: item.maxHeight,
      minW: item.minWidth,
      minH: item.minHeight
    })
  }

  const save = items => {
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

  return { save, saved, add }
}

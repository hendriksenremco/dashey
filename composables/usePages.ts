import { useStorage } from '@vueuse/core'

export const usePages = () => {
  const pages: Ref<any> = useStorage('pages', [{ id: 0, name: 'Home' }], localStorage, { mergeDefaults: true })

  const addPage = ({ name }: {name: string}) => {
    pages.value.push({
      id: Date.now(),
      name
    })
  }

  const removePage = ({ id }: {id: Number}) => {
    const newPages = pages.value.filter(page => page.id !== id)
    pages.value = newPages
  }

  return { addPage, removePage, pages }
}

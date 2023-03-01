// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/scss/main.scss'
  ],
  modules: ['nuxt-icon'],
  build: {
    transpile: ['vue3-grid-layout-next']
  },
  app: {
    rootId: '__app',
    buildAssetsDir: '/_app'
  }
})

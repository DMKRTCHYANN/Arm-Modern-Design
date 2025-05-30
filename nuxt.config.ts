// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  modules: [
    'nuxt-aos'
  ],
  aos: {
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

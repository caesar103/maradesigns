// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

    srcDir: 'app/',
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    // This line is required for Tailwind's styles to be included in your site.
    css: [
        '~/assets/css/main.css'
    ]
})
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
    colorMode: { 
        classSuffix: ''
    },
    googleFonts: {
        preconnect: true,
        families: {
          Roboto: true,
          Poppins: true,
          Montserrat: true,
          'Source Code Pro': true,
          Ubuntu: true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }
})

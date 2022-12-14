// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
    colorMode: { 
        classSuffix: ''
    },
    googleFonts: {
        preconnect: true,
        families: {
          Rokkit: true,
          Poppins: true,
          Montserrat: true,
          'Source Code Pro': true,
          Ubuntu: [400, 500, 700],
          'Titillium Web': [400, 600],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }
})

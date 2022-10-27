/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'scpro': ['"Source Code Pro"', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'tw': ['"Titillium Web"', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'sans': ['Rokkit', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "coffee", "dark"],
    darkTheme: "dark",
  },
}

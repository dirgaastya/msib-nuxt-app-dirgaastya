/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {},
      colors:{
        ...colors,
        'primary' : '#0984DD',
        'secondary' : '#D8EEFD',
        'third' : '#28A0F6'
      }
    },
    plugins: [],
  }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero-bg.jpg')"
      },
      fontFamily: {
        "primary": ["Inter", "sans-serif"],
        "title": ["Raleway", "sans-serif"]
      },
      colors: {
        "primary": "#059C02",
        "shade": "#91B584",
        "light": "#FFFFFF",
        "dark": "#2F4858"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
}


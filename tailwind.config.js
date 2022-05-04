const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
    },
    extend: {
      backgroundImage: {
        "land-1": "url('../imgs/bg-1.webp')"
      },
      colors: {
        overlay: 'rgba(0, 0, 0, 0.6)',
        mainColor: 'var(--main-color)',
      }
    }
  },
  plugins: [],
}
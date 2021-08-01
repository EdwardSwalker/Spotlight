const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
      "./dist/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      productSans: "'Product Sans', serif",
      jf: "'jf', serif"
    },
    colors: {
      "Black-Pearl": "#2C5364",
      "Lilac": "#c471ed",
      "Light-Blue": "#12c2e9",
      "SublimeLight1": "#FC5C7D",
      "SublimeLight2": "#6A82FB",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
      "Light-Blue": "#12c2e9"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

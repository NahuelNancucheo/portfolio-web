module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rubik': ['Rubik'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

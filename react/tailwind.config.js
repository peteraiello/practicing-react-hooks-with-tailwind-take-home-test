const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '612px' : '612px'
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}

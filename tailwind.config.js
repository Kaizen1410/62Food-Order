/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'p1': ['18px', {
          lineHeight: 'normal',
          fontWeight: '500'
        }],
        'p2': ['13px', {
          lineHeight: 'normal',
          fontWeight: '400'
        }],
      },
      colors: {
        'primary': '#F48E28',
        'secondary': '#F5DDC4',
        'gray': '#B6B6B6'
      }
    },
  },
  plugins: [],
}
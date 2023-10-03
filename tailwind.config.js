/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'h1': ['95px', {
          lineHeight: 'normal',
          fontWeight: '700'
        }],
        'h2': ['48px', {
          lineHeight: 'normal',
          fontWeight: '700'
        }],
        'h3': ['36px', {
          lineHeight: 'normal',
          fontWeight: '700'
        }],
        'h4': ['26px', {
          lineHeight: 'normal',
          fontWeight: '700'
        }],
        'h5': ['18px', {
          lineHeight: 'normal',
          fontWeight: '600'
        }],
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
      },
      boxShadow: {
        'search': '0px 0px 17px 0px rgba(0, 0, 0, 0.15)',
        'food-slider-item': '0px 0px 31px 0px rgba(0, 0, 0, 0.05)',
        'product': '0px 2px 30px 0px rgba(0, 0, 0, 0.10)',
        'short-list': '0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
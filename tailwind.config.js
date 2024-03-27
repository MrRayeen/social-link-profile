/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      'lg': {'max': '1300px'},
      'md': {'max': '835px'},
      'sm' : {'max' : '480px'},
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      display: ['responsive'],
    },
  },
}


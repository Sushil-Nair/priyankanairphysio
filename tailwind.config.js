/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#4169E1',
          green: '#88D498',
          yellow: '#ffce1b',
          bg: '#F8F8F8',
        },
        secondary: {
          gray: '#D9D9D9',
          yellow: '#FFF9C4',
          lavender: '#E6E6FA',
        },
        text: {
          dark: '#333333',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
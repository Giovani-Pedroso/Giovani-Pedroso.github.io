/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
      extend: {
          fontFamily: {
              main: "'Roboto Slab', sans-serif",
          },
          colors:{
              primary:"#01A7C2",
              secondary:"",
              tertiary:"#ABAAAA"
          }
      },
  },
  plugins: [],
}

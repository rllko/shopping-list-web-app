/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'orange-light':'rgba(238, 238, 238, 0.816)',
      },
      boxShadow: {
        'solid': '3px 3px 0 0 rgb(0 0 0)',
      }
    },
  },

  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'solid': '3px 3px 0 0 rgb(0 0 0)',
      }
    },
  },

  plugins: [require("./src/plugins/openVariant")],
}

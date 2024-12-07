/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0b1d',
        'dark': '#1a1939',
        'bar': '#321a3e',
        'par': '#9c62ca',
      }
    },
  },
  plugins: [],
}
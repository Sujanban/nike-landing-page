/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '25': '25deg',
        '30': '30deg',
      },
      dropShadow: {
        'custom': '10px 10px 40px rgba(218, 94, 68, 0.98)',
        'sm': '0px 0px 40px rgba(218, 94, 68, 0.58)'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'my-gray': '#939393',
        'my-black': '#001E27',
      },
    },
  },
  plugins: [],
}
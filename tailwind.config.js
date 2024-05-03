/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'mainBg': "url('/public/bg.jpg')",
      }
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brick: '#8C5430',
        aqua: '#7A9478',
        yellow: '#f5efc0',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./images/Flowers-Header.png')",
        'travel-pattern':
          "linear-gradient(rgba(122, 148, 120, 0.4), rgba(122, 148, 120, 0.4)), url('./images/prouts-neck.jpeg')",
        olive:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./images/Olive.jpeg')",
      },
    },
    fontFamily: {
      header: ['Cyriele', ...defaultTheme.fontFamily.sans],
      body: ['rousseau_decobold', ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};

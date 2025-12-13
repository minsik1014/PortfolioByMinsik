// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pokedexRed: '#E3350D',
        pokedexYellow: '#FFDE00',
      },
    },
  },
  plugins: [],
};

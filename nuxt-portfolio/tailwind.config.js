/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        'slate': {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lighter: '#ccd6f6',
          lightest: '#e6f1ff', // text-color
        },
        'teal': {
          DEFAULT: '#64ffda', // main-color
        },
        'gold': {
          DEFAULT: '#ffd700',
        }
      }
    },
  },
  plugins: [],
}


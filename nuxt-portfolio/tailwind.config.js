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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'morph': 'borderAnimation 8s ease-in-out infinite',
        'progress': 'animate 1s cubic-bezier(1, 0, 0.5, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.7)' },
        },
        borderAnimation: {
          '0%, 100%': { borderRadius: '51% 49% 48% 52% / 49% 49% 51% 51%' },
          '35%': { borderRadius: '60% 40% 57% 43% / 40% 54% 46% 60%' },
          '65%': { borderRadius: '67% 33% 68% 32% / 27% 70% 30% 73%' },
        },
        animate: {
          '100%': { transform: 'scaleX(1)' },
        }
      }
    },
  },
  plugins: [],
}


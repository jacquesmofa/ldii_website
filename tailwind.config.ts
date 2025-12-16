import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Corporate Tech Color Palette - Updated to match SYNAPSE GLOBAL
        'corporate-blue': {
          50: '#E8EDF3',
          100: '#D1DBE7',
          200: '#A3B7CF',
          300: '#7593B7',
          400: '#476F9F',
          500: '#0A1E3D', // Primary Deep Navy Blue (from image)
          600: '#081832',
          700: '#061226',
          800: '#040C19',
          900: '#02060D',
        },
        'tech-teal': {
          50: '#E6FCFF',
          100: '#CCF9FF',
          200: '#99F3FF',
          300: '#66EDFF',
          400: '#33E7FF',
          500: '#00D9FF', // Vibrant Cyan/Turquoise (from image)
          600: '#00AED9',
          700: '#0082A3',
          800: '#00576D',
          900: '#002B36',
        },
        'digital-purple': {
          50: '#F0E6FF',
          100: '#E1CCFF',
          200: '#C399FF',
          300: '#A566FF',
          400: '#8733FF',
          500: '#6600CC', // Digital Purple accent
          600: '#5200A3',
          700: '#3D007A',
          800: '#290052',
          900: '#140029',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

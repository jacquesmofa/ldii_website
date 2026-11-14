import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand greens: legacy green-*/emerald-* classes resolve to LDII's greens with AA contrast on white
        green: { 50: '#EEF8F2', 100: '#D6F0E0', 200: '#AEE2C3', 300: '#7FD3A2', 400: '#55C886', 500: '#3CCB7F', 600: '#177A45', 700: '#146C3E', 800: '#0F5531', 900: '#0B3F24' },
        emerald: { 50: '#EEF8F2', 100: '#D6F0E0', 200: '#AEE2C3', 300: '#7FD3A2', 400: '#55C886', 500: '#3CCB7F', 600: '#177A45', 700: '#146C3E', 800: '#0F5531', 900: '#0B3F24' },
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
          // LDII green (replaces the old cyan; name kept so existing pages follow)
          50: '#EAF8F0',
          100: '#CFEFDD',
          200: '#A0DFBB',
          300: '#70CF99',
          400: '#52C989',
          500: '#3CCB7F', // bright LDII green: on navy, or behind navy text
          600: '#2EB06C',
          700: '#1E8A52',
          800: '#146C3E', // deep green: text and buttons on white (AA)
          900: '#0B3F24',
        },
        ldii: {
          navy: '#0A1E3D',
          ink: '#0B1726',
          green: '#3CCB7F',
          deep: '#146C3E',
          mist: '#F2F7F3',
          sand: '#F7F4EE',
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

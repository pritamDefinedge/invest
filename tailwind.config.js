/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0d6efd',
        diwali: {
          orange: '#FF7722',
          red: '#CD2129',
          gold: '#FFD700',
          maroon: '#800000',
          purple: '#6D2E80',
          yellow: {
            light: '#FFF3CC',
            DEFAULT: '#FFC226',
            dark: '#E6AC00'
          }
        }
      },
      zIndex: {
        '999': 999,
      },
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: theme => ({
        'diwali-gradient': "radial-gradient(circle, rgba(255,192,2,1) 5%, rgba(237,172,10,1) 49%, rgba(255,159,2,1) 71%, rgba(255,138,4,1) 100%)",
      }),
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
} 
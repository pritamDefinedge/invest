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
      animation: {
        float1: 'float 6s ease-in-out infinite',
        float2: 'float 8s ease-in-out infinite',
        float3: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 
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
      },
      zIndex: {
        '999': 999,
      },
      container: {
        center: true,
        padding: '1rem',
      },
      // animation: {
      //   float1: 'float 6s ease-in-out infinite',
      //   float2: 'float 8s ease-in-out infinite',
      //   float3: 'float 7s ease-in-out infinite',
      // },
      // keyframes: {
      //   float: {
      //     '0%, 100%': { transform: 'translateY(0)' },
      //     '50%': { transform: 'translateY(-20px)' },
      //   },
      // },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(-2deg)' },
        },
        width: {
          '0%, 100%': { width: '50%' },
          '50%': { width: '60%' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        'float-delay': 'float-delay 15s ease-in-out infinite',
        width: 'width 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 
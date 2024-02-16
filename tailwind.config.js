/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: '#000',
        priTrans: '#666666',
        sec: '#ff4949',
        secTrans: '#ff494990',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        leftToRight: 'leftToRighto 0.5s ease forwards',
        stretchWidth: 'stretchWidth 0.5s ease forwards',
        visible : 'visible 1.8s ease forwards',
      },
      keyframes: {
        visible: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        stretchWidth: {
          '0%': { width: '0' },
          '100%': { width: '100vw' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        leftToRighto: {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        blur: {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(80px)' },
        },
      },
      fontFamily: {
          product: ['ProductSans-Light'],
      },
      boxShadow: {
        '3xl': '0px 14px 30px rgba(204, 204, 204, 0.32)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#f0f4f8',
        textColor: '#102a43',
        lightRed: '#f8d7da',
        darkRed: '#842029',
        lightGreen: '#d1e7dd',
        darkGreen: '#0f5132',
        darkBlue: 'rgb(100, 122, 203)',
        lightBlue: 'rgb(224, 232, 249)',

        // card colors
        yellowishGold: 'rgb(233, 185, 73)',
        yellowishOrange: 'rgb(252, 239, 199)',

        blueishGold: 'rgb(100, 122, 203)',
        blueishOrange: 'rgb(224, 232, 249)',

        redishGold: 'rgb(214, 106, 106)',
        redishOrange: 'rgb(255, 238, 238)',

        primary50: '#eff6ff',
        primary100: '#dbeafe',
        primary200: '#bfdbfe',
        primary300: '#93c5fd',
        primary400: '#60a5fa',
        primary500: '#3b82f6',
        primary600: '#2563eb',
        primary700: '#1d4ed8',
        primary800: '#1e40af',
        primary900: '#1e3a8a',
      },
      fontFamily: {
        headingFont: [ 'Roboto Condensed', 'sans-serif' ],
        bodyFont: ['Cabin', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

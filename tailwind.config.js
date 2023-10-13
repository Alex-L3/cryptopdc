/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./components/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        general: "#41A4DF",
        deepblue: "#297EE2",
        dark181: '#18181D',

        lightblue: "#CBE6F6", // temp
      }
    },
  },
  plugins: [],
}


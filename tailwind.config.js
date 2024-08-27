/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black: '#000000',
      customDark: '#182230',
      customGray: '#adb1b3',
      customPink: '#D067A9',
      customBeg: '#BDB2A3',
      customDarkBeg: '#AD9173'
    }
  },
  variants: {
    extend: {},
  },

}


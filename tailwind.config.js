/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      customLila: '#D4D0EB',
      customPink: '#EECEC8',
      customRed: '#A46F6A',
      customWhite: '#F6F2EB'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


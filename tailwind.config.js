/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black: '#000000',
      customDark: '#182230',
      customGray: '#797D7F',
      customPink: '#D067A9',
      customBeg: '#BDB2A3',
      customDarkBeg: '#AD9173'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}


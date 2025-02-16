/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4c7c04',
        secondary: '#7a1d12',
        tertiary: '#e9cd1f',
        quaternary: '#bba00d',
        quinary: '#371a0d',
      },
    },
  },
  plugins: [],
}

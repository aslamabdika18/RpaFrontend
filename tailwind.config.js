/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7ed957',
        secondary: '#7a1d12',
        tertiary: '#ffde59',
        quaternary: '#bba00d',
        quinary: '#371a0d',
      },
    },
  },
  plugins: [],
}

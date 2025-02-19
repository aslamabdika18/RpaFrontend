/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7ed957',
        secondary: '#b6d83c',
        tertiary: '#ffde59',
      },
    },
  },
  plugins: [],
}

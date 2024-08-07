/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#D6802A',
        'brand-blue': '#0ea5e9'
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepBlue: '#1E3A8A',
        cyan: '#06B6D4',
        orange: '#F97316'
      }
    }
  },
  plugins: []
}
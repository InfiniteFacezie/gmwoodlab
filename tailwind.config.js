/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd0',
          300: '#d6c7ad',
          400: '#c2aa86',
          500: '#a8885f',
          600: '#8b6f4b',
          700: '#6e5739',
          800: '#4a3a27',
          900: '#2d2318',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
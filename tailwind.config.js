/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#5E1EE5',
        'lemon': '#AFE638',
        'graylight': '#E2E2E2'
      },
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


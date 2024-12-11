/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['Great Vibes', 'cursive'],
        transform: ['group-hover'],

      },
    },
  },
  plugins: [],
}
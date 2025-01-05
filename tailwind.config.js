/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#ebedee',
        fontBlack: '#3c434a' // Add your custom color here
      },
    }
  },
  plugins: [],
}
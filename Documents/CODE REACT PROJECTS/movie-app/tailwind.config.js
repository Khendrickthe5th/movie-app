/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'custom1': ["custom-1", "sans-serif"],
        'custom2': ["custom-2", "cursive"],
        custom3: ["custom-3", "sans-serif"]
      }
    }
  },
  plugins: [],
}

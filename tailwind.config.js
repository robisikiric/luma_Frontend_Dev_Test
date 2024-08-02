/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.placeholder-white::placeholder': {
          color: '#ffffff',
          opacity: '1',
        },
        '.placeholder-gray::placeholder': {
          color: '#5A5A5A',
          opacity: '1',
        },
      });
    }
  ],
}



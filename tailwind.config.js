/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      spacing: {
        '-2': '-0.5rem', // Adjust the value as needed
      },
    },
  },
  plugins: [],
}


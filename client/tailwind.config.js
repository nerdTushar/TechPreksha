/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],   
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/design (4).png')",
        'login': "url('../public/images/login (2).png')",
      },
    },
  },
  plugins: [],
}

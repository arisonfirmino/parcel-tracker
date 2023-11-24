/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "container-color": "#353535",
        "yellow-tracker": "#ffd400",
        "blue-tracker": "#0071ad",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ecf1ff",
        secondary: "#3267ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

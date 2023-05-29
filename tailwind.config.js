/** @type {import('tailwindcss').Config} */

/*
  For Mobile, use "mobile"
*/

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "400px" },
    },
    extend: {},
  },
  plugins: [],
};

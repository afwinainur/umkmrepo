/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./node_modules/flowbite/**/*.js","./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/plugin.cjs"),
  ],
  darkMode: "class"
}


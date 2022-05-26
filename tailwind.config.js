const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      width: {
        '1/10' : "93%"
      }
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens
    },
  },
  plugins: [require("flowbite/plugin")],
};

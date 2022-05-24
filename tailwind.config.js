const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens
    },
  },
  plugins: [require("flowbite/plugin")],
};

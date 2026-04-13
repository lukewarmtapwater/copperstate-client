/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FF6C08",
        light: "#E2E2E2",
        "less-light": "#686868",
        "less-less-light": "#A6A6A6",
      },
    },
  },
  plugins: [],
};

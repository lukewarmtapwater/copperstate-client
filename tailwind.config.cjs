/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6C08",
        foreground: colors.gray[500],
        muted: colors.gray[300],
        subtle: colors.gray[100],
        background: colors.white,
        success: colors.green[500],
        danger: colors.red[500],
      },
    },
  },
  plugins: [],
};

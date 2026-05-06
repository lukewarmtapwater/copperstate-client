/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6D1F",
        foreground: "#262626",
        muted: "#F5E7C6",
        subtle: "#FAF3E1",
        background: "white",
        success: "#628141",
        danger: "#C40C0C",
      },
    },
  },
  plugins: [],
};

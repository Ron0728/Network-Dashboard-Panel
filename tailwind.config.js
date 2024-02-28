/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "#F1EDEC",
        primary: "rgb(8,8,95)",
        onPrimary: "rgb(0,0,255)",
        onBackground: "#000000",
        secondary: "#EB8C9",
        onSecondary: "rgb(233,124,65)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

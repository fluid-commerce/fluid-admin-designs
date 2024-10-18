/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#0e1623",
        bgColor: "#fcfcfd",
        iconGray: "#1f2937",
      },
      height: {
        "28px": "28px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

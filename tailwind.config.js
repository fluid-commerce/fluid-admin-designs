/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#e9ebf1",
        bgColor: "#fcfcfd",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

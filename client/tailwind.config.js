/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // we start to customize colors and fonts
  theme: {
    extend: {
      height: {
        header: "560px",
        rate: "400px",
      },
      fontSize: {
        h1: "2.6rem",
      },
      screens: {
        xs: "475px",
      },
      colors: {
        main: "#080a1a",
        subMain: "#f20000",
        dry: "#0b0f29",
        star: "#ffb000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#e0d5d5",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

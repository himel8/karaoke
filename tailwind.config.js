/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Raleway', sans-serif",
        text: "'Manrope', sans-serif",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        heroBg: "url('./assets/img/heroBg.jpg')",
        footerBg: "url('./assets/img/footerBg2.jpg')",
      },
      colors: {
        hero: "#e03270bf",
        title: "#bfdd00",
        // title: "#231f20",

        main: "#e03270",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Raleway', sans-serif",
        text: "'Manrope', sans-serif",
        title: "'Russo One', sans-serif",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        heroBg: "url('./assets/img/heroBg.jpg')",
        footerBg: "url('./assets/img/footerBg2.jpg')",
      },
      colors: {
        hero: "#2d2d2d",
        title: "#d43538",
        simple: "#e03270",

        main: "#1c1c1c",
      },
      screens: {
        navBreak: "1120px",
        navBreak2: "1250px",
        custom: "1100px",
      },

      animation: {
        wiggle: "wiggle 2.5s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%,50%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};

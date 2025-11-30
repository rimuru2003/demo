/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Parkinsans: ["Parkinsans", "sans-serif", "Inter"],
      },
    },
    screens: {
      sm: "650px",
      md: "767px",
      lg: "991px",
      xl: "1280px",
      xsm: "425px",
      xxsm: "375px",
  
    },
  },
  plugins: [],
};

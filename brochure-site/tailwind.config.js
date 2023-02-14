/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "calibri"],
        rowdies: ["Rowdies", "calibri"],
        elmessiri: ["El Messiri", "calibri"],
        elite: ["Special Elite", "calibri"],
        hand: ["Just Another Hand", "calibri"],
      },
      colors: {
        browntrans: "#78350f66",
        blacktrans: "#00000085",
      },
      backgroundImage: {
        cafeheader: "url('/src/Photos/coffee-shop.jpg')",
      },
    },
  },
  plugins: [],
};

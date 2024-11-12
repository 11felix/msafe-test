/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        // poppinsmedium: ["PoppinsMedium", "sans-serif"]
      },
      keyframes: {
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(0rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-spinner": {
          "-moz-appearance": "textfield",
          "-webkit-appearance": "none",
        },
        ".no-spinner::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
        ".no-spinner::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
      });
    },
  ],
};

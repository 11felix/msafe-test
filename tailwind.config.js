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
    },
  },
  plugins: [],
};

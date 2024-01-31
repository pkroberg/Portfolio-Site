/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      paletteBlue1: "#01161e",
      paletteBlue2: "#124559",
      paletteBlue3: "#598392",
      paletteBlue4: "#aec3b0",
      paletteCreme: "#eff6e0",
    },
  },
  plugins: [],
};

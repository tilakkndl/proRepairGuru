/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      infobg: "#10539a",
      orange: "#ff931e",
      headerbg: "#ffffff", //#ffffff
      lightorange: "#f6f6f6",
      infoFooterCol: "#14212b",
      greyWhite: "#fffff"
      
    },
  },
  },
  plugins: [],
}


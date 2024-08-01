/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2E2E2E",
        secondary:"#FFFFFF",
        accent:"#FFC857",
        accent2:"#008080"
      },
      fontFamily:{
        klender: ["klender", "sans-serif"]
      }
    },
  },
  plugins: [],
}
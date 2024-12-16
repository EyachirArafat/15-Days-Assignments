/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        html1: "#DF5452",
        html2: "#CA9849"
      }
    },
  },
  plugins: [],
}


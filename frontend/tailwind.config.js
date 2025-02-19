/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        // primary:"#1182c5",
        primary:"#4E73DF",
        secondary:"#2aa6df",

      },
      container:{
        center:true,padding:{
          default:"1rem",
          sm:"3rem",
        },
      },
      fontFamily:{
        title:["Oswald","sans-serif"],
      },
    },
  },
  plugins: [],
}

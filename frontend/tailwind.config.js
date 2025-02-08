/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"",
        secondary:"",

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

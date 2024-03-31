/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.js,.jsx,.ts,.tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pop':  ["Poppins", 'sans-serif'], // Replace 'Roboto' with the name of the Google Font you've chosen
        'jost': ["Jost", "sans-serif"]
      },
      colors:{
        primary:"#42ba4f",
        primary_color:"#EEC759",
        fontColor:"#54c263",
        text_color:"#040D12",
        greybg:"#f1f2f2"
      },
      
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
}


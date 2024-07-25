/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sono: ['Sono', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        xs: "430px",
        ss: "650px",
        sm: "768px",
        smm: "880px",
        md: "1060px",
        mdp: "1300px",
        lg: "1500px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

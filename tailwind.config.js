/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Simple min-width breakpoint (recommended approach)
      screens: {
        'xs-custom': '390px', // @media (min-width: 390px)
      },
      // Your custom fonts
      fontFamily: {  
        poppins: ['"Poppins"', 'sans-serif'],  
        lato: ['"Lato"', 'sans-serif'],  
        raleway: ['"Raleway"', 'sans-serif'],  
        roboto: ['"Roboto"', 'sans-serif'],  
        sourceSerif: ['"Source Serif 4"', 'serif'],  
      },
      // Your custom colors
      colors: {
        white: 'hsla(0, 0%, 100%, 1)',
        utiliBlue: 'hsla(210, 100%, 36%, 1)',
        dimBlack: 'hsla(210, 9%, 5%, 1)',
        dimGray: 'hsla(195, 9%, 11%, 1)',
        spanYellow: 'hsla(44, 100%, 49%, 1)',
        grayColor: 'hsla(200, 7%, 25%, 1)',
      },
    },
  },
  plugins: [],
};
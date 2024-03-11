/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#171717',
        redshop:'#ff4141',
      },
      
      backgroundImage: {
        heroBg : 'linear-gradient(180deg, #fde1ff, #e1ffea22 60%)',
      },
    },
  },
  plugins: [],
}


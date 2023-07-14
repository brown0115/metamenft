/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        white: '#FFFFFF',
        white15: 'rgba(255, 255, 255, 0.15)',
        pink: '#FF5FC9',
        pink35: 'rgba(255, 95, 201, 0.35)',
        pink60: 'rgba(255, 95, 201, 0.6)',
        black: '#1E1E1E',
      },
      fontSize: {
        xs:'10px',
        sm: "14px",
        md: "",
        lg: "",
        xl: "22px",
      },
      fontFamily: {
        ceraLight: ['cerapro-light', 'sans-serif'],
        ceraMedium: ['cerapro-medium', 'sans-serif'],
        ceraBold: ['cerapro-bold', 'sans-serif'],
        ceraBlack: ['cerapro-black', 'sans-serif'],
      },
      backgroundImage: {
        'heroIMG': "url('../src/assets/imgs/hero-bg.svg')",
        'linear01': "linear-gradient(to bottom, rgba(15, 0, 27, 1), rgba(29, 0, 52, 0))",
      },
      boxShadow: {
        'xl': "0px 0px 73px 0px #710F4F",
      },
    },
  },
  plugins: [],
};

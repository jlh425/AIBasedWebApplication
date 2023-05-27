/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      footFamily: {
        satoshi: ["Satoshi", 'sans-serif'],
        inter: ["Inter", "Sans-serif"],
        
      }
    },
  },
  plugins: [],
};

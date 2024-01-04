/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        master_mint: "#C3E2D4",
        master_shadow: "#402E32",
        master_beige: "#FEF3E1",
        master_bg: "#FFF7E9",
        
      },
    },
  },
  plugins: [],
};

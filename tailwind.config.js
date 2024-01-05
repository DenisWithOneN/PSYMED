/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '101': '42rem',
        'gi1': '30rem',
        'gi2': '16.75rem',
        'gi3': '12rem',
        'gi4': '12rem',
        'gi5': '16.75rem',
        'gi6': '30rem',
        'gi7': '20rem',
        'gi8': '20rem',
        'gi9': '20rem',
        'map': '30rem',
        'mapxl': '50rem',
      },
      height: {
        'gi7': '30rem',
        'gi8': '23rem',
        'gi9': '12.25rem',
        'map': '30rem',
        'mapxl': '40rem',
      },
      colors: {
        master_mint: "#C3E2D4",
        master_shadow: "#402E32",
        master_beige: "#FEF3E1",
        master_bg: "#FFF7E9",
        master_text: "#402E32",
      },
    },
  },
  plugins: [],
};

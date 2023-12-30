/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "master-purple": "#472183",
        "secondary-purple": "#7743DB",
        "master-grey": "#2E2E2E",
        "body-gradient-contrast": "#FFF3D3",
        "body-gradient-light": "#FFF8EC",
      },
    },
  },
  plugins: [],
};

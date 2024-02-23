/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      mobilelg: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      widescreen: "1440px",
    },
    extend: {},
  },
  plugins: [],
};

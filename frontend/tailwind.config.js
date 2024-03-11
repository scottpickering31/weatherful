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
    extend: {
      height: {
        tiny: "30vh",
        little: "50vh",
        small: "70vh",
        medium: "90vh",
        large: "110vh",
        extral: "125vh",
        tariff: "6.5rem",
      },
      width: {
        tiny: "40vw",
        little: "50vw",
        small: "70vw",
        medium: "90vw",
        large: "110vw",
        extral: "125vw",
      },
    },
  },
  plugins: [],
};

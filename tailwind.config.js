const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          phone: "10px",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        eksell: ["Eksell Display", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: "#FFF",
        black: "#000000",
        blue: {
          50: "#E6F1FE",
          100: "#CCE3FD",
          200: "#99C7FB",
          300: "#66AAF9",
          400: "#338EF7",
          500: "#006FEE",
          600: "#005BC4",
          700: "#004493",
          800: "#002E62",
          900: "#001731",
        },
        purple: {
          50: "#F2EAFA",
          100: "#E4D4F4",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

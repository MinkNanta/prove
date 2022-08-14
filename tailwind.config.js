/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "9xl": ["144px", { lineHeight: "144px" }],
      "8xl": ["128px", { lineHeight: "128px" }],
      "7xl": ["72px", { lineHeight: "72px" }],
      "6xl": ["60px", { lineHeight: "60px" }],
      "5xl": ["48px", { lineHeight: "58px", letterSpacing: "-0.04em" }],
      "4xl": ["30px", { lineHeight: "36px" }],
      "3xl": ["30px", { lineHeight: "36px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      lg: ["20px", { lineHeight: "28px" }],
      x: ["18px", { lineHeight: "28px" }],
      base: ["16px", { lineHeight: "24px" }],
      sm: ["14px", { lineHeight: "16px" }],
      xs: ["12px", { lineHeight: "14px" }],
    },
    extend: {
      colors: {
        base: {
          500: "#CFD1D2",
          600: "#9EA4A5",
          700: "#6E7678",
          800: "#3D494B",
          900: "#0D1B1E",
        },
        main: {
          50: "#FAF0E6",
          800: "#F5E3C8",
        },
        red: {
          50: "#FFD9D8",
          100: "#FEB4B1",
          200: "#FE8E8A",
          300: "#FE6863",
          400: "#FE423C",
        },
        yellow: {
          50: "#FFCF8B",
          100: "#FFCF8B",
          200: "#FFCF8B",
          300: "#FFCF8B",
          400: "#FFC36E",
        },
        green: {
          50: "#E4EBE6",
          100: "#CAD8CD",
          200: "#AFC4B4",
          300: "#95B19A",
          400: "#7A9D81",
        },
        blue: {
          50: "#EEF6FC",
          100: "#DEEDFA",
          200: "#CDE4F7",
          300: "#BDDBF5",
          400: "#ACD2F2",
        },
      },
    },
  },
  plugins: [],
};

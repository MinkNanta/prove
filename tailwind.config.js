/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "display-5xl": ["48px", { lineHeight: "50px" }],
        "display-4xl": ["36px"],
        "heading-3xl": ["30px"],
        "heading-2xl": ["24px"],
        "heading-xl": ["20px"],
        "body-lg": ["18px"],
        "body-base": ["16px"],
        "CTA-medium": ["16px"],
        "CTA-small": ["14px"],
        "label-medium": ["14px"],
        "label-small": ["12px"],
      },
      borderRadius: {
        xl: "40px",
      },
      boxShadow: {
        card: "0px 16px 48px rgba(102, 61, 20, 0.21)",
      },
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

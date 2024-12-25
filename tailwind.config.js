/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "5xl": "56px",
        "4xl": "48px",
        "3xl": "40px",
        "2xl": "32px",
        xl: "24px",
        lg: "18px",
        md: "16px",
        sm: "14px",
        xs: "12px",
      },
      colors: {
        primary: {
          50: "#e2fcd9cc",
          100: "#c0fab4",
          200: "#94f08b",
          300: "#6be26b",
          400: "#3ecf4c",
          500: "#39ba49",
        },
        secondary: {
          50: "#fff7d7d0",
          100: "#ffecb0",
          200: "#ffdf88",
          300: "#ffd26b",
          400: "#ffbd3a",
          500: "#e6a22f",
        },
        tertiary: {
          50: "#fee8d3d0",
          100: "#FECAA5",
          200: "#FCA578",
          300: "#F98256",
          400: "#F64920",
          500: "#e23d1a",
        },
        light: {
          1: "#ffffff",
          2: "#c1c2c4",
          3: "#9d9ea1",
        },
        dark: {
          1: "#222325",
          2: "rgba(51, 51, 51, 0.68)",
          3: "rgba(58, 53, 65, 0.38)",
        },

        bg: {
          main: "#fffdf3",
          base: "#f4f5fa",
          border: "rgba(58, 53, 65, 0.12)",
        },
        gr: {
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9e9e9e",
          400: "#bdbdbd",
          300: "#e0e0e0",
          200: "#eeeeee",
          100: "#f5f5f5",
          50: "#fafafa",
        },
        screens: {
          xs: "480px",
        },
      },
    },
  },
  plugins: [],
};
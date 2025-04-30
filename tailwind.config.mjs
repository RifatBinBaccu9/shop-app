/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#131118",
        textHover: "#E16639",
        secondary: "#A4A1AA0D",
        bgButton: "#174A9B",
        bgBHover: "#123A7A",
        bulu: "#174A9B",
        bgGrea: "#273142",
      },
    },
  },
  plugins: [],
};

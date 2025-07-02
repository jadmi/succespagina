/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1791px",
        infinity: "1920px",
      },
    },
  },
  plugins: [],
};

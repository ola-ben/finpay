/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myColor: '#fff',
        gradientPrimary: "var(--gradient-primary)",
      },
      fontFamily: {
        rubik: '"Rubik", sans-serif',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        nixie: ["Nixie One", "sans-serif"],
        alegreya: ["Alegreya SC", "serif"],
        alegreyaSans: ["Alegreya Sans", "sans-serif"],
      },
      colors: {
        "ni-grau-dunkel": "#6A6A6A",
        "ni-green-dunkel": "#3A4F52",
        "ni-grau-light": "#C3C9CC",
        "ni-blau": "#4DA7CA",
        "ni-grau": "#CCCCCC",
        "ni-schwarz": "#2B3E51",
        "ni-green": "#405162",
        "ni-weiss": "#F5F5F5",
        "ni-weiss-50": "rgba(255, 255, 255, 0.5)",
        "ni-weiss-20": "rgba(255, 255, 255, 0.2)",
        "ni-schwarz-20": "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/img/div#header.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        body: "#17171f",
        "selected-text": "#a3a3ff",
        theme: "#FF3131",
        "theme-dark": "#cc2727",
        nav: "#404053",
        secondary: "#9191a4",
        badge: "#3f3f51",
        "input-border": "#565666",
        input: "#2a2a35",
      },
      fontFamily: {
        poppins: ["'poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

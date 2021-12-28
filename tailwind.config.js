module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "pale-white": "#F8F8FF",
        primary: "#02204C",
        accent: "#FF7A7A",
        "accent-dark": "#FF5757",
        "accent-darker": "#FF1E1E",
        "accent-light": "#FFA5A5",
      },
      boxShadow: {
        opaque: "2px 2px 0px 2px",
      },
    },
  },
  plugins: [],
};

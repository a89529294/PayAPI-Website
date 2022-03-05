module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      spacing: {
        22: "5.5rem",
        76: "19rem",
        112: "28rem",
        140: "35rem",
      },
      colors: {
        "link-water-white": "#fbfcfe",
        "aircraft-white": "#edf3f8",
        "light-san-juan-blue": "#6c8294",
        "mirage-blue": "#1B262F",
        "velvet-rope": "#36536b",
        "lilac-rose": "#BA4270",
      },
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        body: ['"Public Sans"', "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg-pattern-circle.svg')",
        "hero-pattern-tablet": "url('/images/bg-pattern-circle-tablet.svg')",
      },
      backgroundPosition: {
        "hero-position": "center -500px",
        "hero-position-tablet": "center -700px",
        "footer-position": "center 175px",
      },
    },
  },
  plugins: [],
};

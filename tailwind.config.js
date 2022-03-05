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
      colors: {
        "link-water-white": "#fbfcfe",
        "aircraft-white": "#edf3f8",
        "light-san-juan-blue": "#6c8294",
        "mirage-blue": "#1B262F",
        "velvet-rope": "#36536b",
        "lilac-rose": "#BA4270",
        "gilneas-grey": "#6C8294",
      },
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        body: ['"Public Sans"', "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg-pattern-circle.svg')",
      },
      backgroundPosition: {
        "hero-position": "center -500px",
      },
    },
  },
  plugins: [],
};

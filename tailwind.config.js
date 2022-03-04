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
        "aircraft-white": "#edf3f8",
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
        hero: "50% 1500%",
      },
    },
  },
  plugins: [],
};

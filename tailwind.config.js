module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tealish: "#26c0ab",
        "sherpa-blue": "#00494d",
        "uniform-green-grey": "#5e7a7d",
        "salt-blue": "#7f9c9f",
        "aviary-blue": "#c5e4e7",
        "distant-horizon": "#f4fafa",
      },
      fontFamily: {
        "space-mono": "'Space Mono', monospace;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

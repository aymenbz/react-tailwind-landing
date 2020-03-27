const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: "#64748B",
      secondary: "#1A202C",
      indigo: "#4C51BF"
    },
    zIndex: {
      "-1": "-1"
    }
  },
  variants: {},
  plugins: []
};

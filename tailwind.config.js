module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // dark mode
      "dark-blue": "hsl(209, 23%, 22%)",
      "very-dark-blue": "hsl(207, 26%, 17%)", // <--- background
      // light mode
      "light-mode-text": "hsl(200, 15%, 8%)",
      "light-input": " hsl(0, 0%, 52%)",
      "very-light-gray": "hsl(0, 0%, 98%)", // <--- background
      white: "hsl(0, 0%, 100%)",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};

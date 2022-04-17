module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      backgroudImage: {
        "auth-btn":
          "linear-gradient(94.88deg, #C4C4C4 -5.64%, #0121F8 -5.64%, #1433FF 102.84%)",
      },
    },
  },
  plugins: [],
};

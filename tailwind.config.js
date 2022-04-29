module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bluePng': "url('/assets/blue-bg.png')",
      }
    },
  },
  plugins: [],
}

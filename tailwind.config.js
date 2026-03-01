/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "white-600": "#fcfcfc",
        "black-100": "#bbbbbb",
        "black-300": "#9195a1",
        "black-400": "#2C2E33",
        "primary-blue": "#4F46E5",
        "primary-blue-100": "rgba(79, 70, 229, 0.1)",
        "secondary-orange": "#f79761",
        "light-white": "rgba(59,60,152,0.03)",
        "light-white-100": "rgba(59,60,152,0.02)",
        grey: "#747A88",
      },
      backgroundImage: {
        "hero-bg": "url('/pattern.png')",
      },
    },
  },
  plugins: [],
};

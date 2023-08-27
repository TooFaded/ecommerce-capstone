/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee Inline", "cursive"],
        lobster: ["Lobster", "cursive"],
      },
      backgroundImage: {
        banner: "url('../src/assets/banner-img.jpg')",
      },
    },
  },
  plugins: [],
};

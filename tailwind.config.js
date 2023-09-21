/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-right": "slide-right 0.5s ease-in-out", // Define a custom animation
      },
      keyframes: {
        "slide-right": {
          "0%, 100%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      transitionDuration: {
        500: "500ms", // Define custom transition durations
      },
      fontFamily: {
        bungee: ["Bungee Inline", "cursive"],
        lobster: ["Lobster", "cursive"],
      },
      backgroundImage: {
        banner: "url('public/banner-img.jpg')",
      },
    },
  },
  plugins: [],
};

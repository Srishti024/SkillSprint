/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
      animation: {
        gradientSlow: "gradient 15s ease infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        glow: {
          "0%": { textShadow: "0 0 5px #0ff, 0 0 10px #0ff" },
          "100%": { textShadow: "0 0 20px #0ff, 0 0 30px #0ff" },
        },
      },
    },
  },
  plugins: [],
};

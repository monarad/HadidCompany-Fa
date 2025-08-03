// @ts-ignore


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#f0f3f2",
        "green-color": "#ffcc00",
        "text-color": "#7e8285",
        "border-bottom": "#dfe5e8",
        "footer-text-color": "#99a9b5",
      },
      fontFamily: {
        vazir: ["Vazir", "sans-serif"],
      },
      backdropBlur: {
        lg: "20px", // You can customize this value as needed
      },

      keyframes: {
        slideInFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slideInFromLeft 1s ease-out forwards",
        "slide-in-right": "slideInFromRight 1s ease-out forwards",
        "slide-from-left": "slide-from-left 1s ease-out forwards",
      },
    },
  },
  variants: {
    backdropFilter: ["responsive"], // Enable responsive variants if needed
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    // extend: {
    //   transitionProperty: {
    //     height: "height",
    //   },
    // },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        growFromTopRight: {
          "0%": {
            transform: "scaleX(0) scaleY(0)",
            transformOrigin: "top right",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
            transformOrigin: "top right",
          },
        },
        fadeInUp100: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            // opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px)",
          },
          "100%": {
            // opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        growFromTopRight: "growFromTopRight 0.5s ease-out forwards",
        fadeInUp: "fadeInUp 2s ease-in-out",
        scroll: "scroll 15s linear infinite",
        fadeInUpSlower: "fadeInUp 1s ease-in",
        fadeInUpFaster: "fadeInUp 1s ease-in-out",
        fadeInUpLower: "fadeInUp100 1.2s ease-in-out",
        zoomIn: "zoom-in 1.5s ease-out 0.95s 1",
      },
    },
  },
  plugins: [],
};

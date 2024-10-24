/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,css,js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      imgShadow: "0 0 2rem #FAA307",
      imgShadow2: "0 0 1rem #FAA307",
    },
    extend: {
      backgroundImage: {
        cassinoBG: "url('public/img/cassino2.jpg')",
      },
      dropShadow: {
        "icon-shadow": "-2px 4px 1px  #DC2F02 ",
      },
      colors: {
        lightYellow: "#FFBA08",
        darkYellow: "#F48C06",
        lightOrange: "#DC2F02",
        lightRed: "#D00000",
        roseRed: "#9D0208",
        customLightBlue: "#6A040F",
        customBlue: "#370617",
        richBlack: "#03071E",
      },
      animation: {
        "custom-spin": "spin 3s linear infinite ",
        "loop-scroll": "loop-scroll 5s linear infinite",
        "bounce-delay": "bounce 1.5s ease-in   0.5s ;",
        jello: "jello-horizontal 1.5s both;",
        "custom-ping": "custom-ping 3s forwards   infinite;",
      },
      keyframes: {
        "custom-ping": {
          from: {
            opacity: "0.5",
            transform: "scale(1.1)",
          },

          to: {
            transform: "scale(1.5)",
            opacity: " 1",
          },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "jello-horizontal": {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
            filter: "drop-Shadow(1px 1px 2px  #DC2F02)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        bounce: {
          "0%, 100% ": {
            transform: "translateY(0%)",
            "animation-timing-function": " cubic-bezier(0.8, 0, 1, 1)",
          },
          "25%": {
            transform: "translateY(10%)",
            "animation-timing-function": " cubic-bezier(0, 0, 0.2, 0)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": " cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};

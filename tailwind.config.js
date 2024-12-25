/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(111.4deg, #101725, #122831 93.2%)",
      },
      boxShadow: {
        "circle-glow": "0 0 13px 3px rgba(14, 165, 233, 0.5)",
      },
      keyframes: {
        "text-bigger": {
          from: {
            transform: "scale(0.5)",
            opacity: "0",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "text-to-top": {
          "0%": {
            transform: "translateY(40px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "header-translate": {
          from: {
            transform: "translateY(-65px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "card-one": {
          from: {
            transform: "translateY(200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "card-two": {
          from: {
            transform: "translateY(200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "card-three": {
          from: {
            transform: "translateY(200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "card-four": {
          from: {
            transform: "translateY(200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "card-five": {
          from: {
            transform: "translateY(200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "card-six": {
          from: {
            transform: "translateY(200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "text-bigger": "text-bigger 2s ease-in-out",
        "text-to-top": "text-to-top 2s ease-in-out",
        "header-translate": "header-translate 2s ease-in-out",
        "card-one": "card-one 1s ease-in-out",
        "card-two": "card-two 1.5s ease-in-out",
        "card-three": "card-three 2s ease-in-out",
        "card-four": "card-four 2.5s ease-in-out",
        "card-five": "card-five 3s ease-in-out",
        "card-six": "card-six 3.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

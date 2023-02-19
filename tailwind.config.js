/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@fuego-ui/react/index.js",
  ],
  theme: {
    colors: {
      black: "#303841",
      white: "#fff",
      gray: "#777777",
      "blue-jaunts": "#467dcd",
      "light-purple-fax": "#f1f1ff",
      "hip-black": "#303842",
      "geeking-orange": "#f9674e",
      "red-mans": "#e23d3d",
      "yee-purple": "#52489c",
      "ardy-green": "#1b998b",
      "wilding-yellow": "#eec643",
      "ocean-blue": "#81d3ca",
      "shadow-black": "#22282f",
      transparent: "transparent",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#81d3ca",
          secondary: "#D926A9",
          accent: "#81d3ca",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: {
          100: "#c9dbcf",
          200: "#a9d4ba",
          300: "#6bc784",
          700: "#328b55",
          800: "#267d49",
          900: "#224f34",
          A100: "#c2efd4",
          A400: "#0fff6f",
          A100_01: "#a3f3be",
          "800_01": "#267044",
          "50_7f": "#defae97f",
          "900_01": "#224e34",
        },
        black: {
          "900_7f": "#0000007f",
          "900_4c": "#0000004c",
          "900_0c": "#0000000c",
        },
        blue_gray: {
          50: "#eaebf0",
          100: "#d9d9d9",
          300: "#93b8a2",
          900: "#373737",
          "100_01": "#d3e2d6",
        },
        gray: {
          100: "#f2f2f2",
          200: "#eaeaea",
          300: "#ddebe2",
          600: "#6e6e6e",
          800: "#454545",
        },
        amber: { 400: "#f5d425" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 7px  30px 0px #0000000c",
        bs1: "6px 33px  59px 0px #0000004c",
      },
      fontFamily: {
        rufina: "Rufina",
        poppins: "Poppins",
        robotoslab: "Roboto Slab",
        elephant: "Elephant",
        robotoserif: "Roboto Serif",
        arialroundedmtbold: "Arial Rounded MT Bold",
      },
      backgroundImage: { gradient: "linear-gradient(95deg ,#f2f2f2,#eaeaea)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

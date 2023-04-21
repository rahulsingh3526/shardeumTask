/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#31ff10",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(to right, #764ba2, #667eea)",
        "card-gradinet": "linear-gradient(to right, #762baf, #627eea)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--ff-sedwick)"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit,minmax(200px,1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blanco': '#ECE0D1',
        'blanco-oscuro': '#DBC1AC',
        'marron-clarito': '#967259',
        'marron-claro': '#634832',
        'marron': '#38220F',
        'negro': '#181305',

      }, 
    },
  },
  plugins: [],
};
export default config;

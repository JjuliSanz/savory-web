import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "500": "500px",
        "600": "600px",
        "900": "900px",
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

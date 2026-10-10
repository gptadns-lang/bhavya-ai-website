import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#060D1A",
        gold: "#F5B301",
        offwhite: "#F5F7FA",
        electric: "#38BDF8",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Noto Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

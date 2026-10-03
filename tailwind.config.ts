import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        gold: "#D4AF37",
        offwhite: "#F5F7FA",
        electric: "#2F80ED",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Noto Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

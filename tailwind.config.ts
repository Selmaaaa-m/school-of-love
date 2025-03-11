import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

const config: Config = {
  content: [
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: "#00AD8E",
        customGold: "#D9BB60",
        customYellow: "#DFA700",
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;

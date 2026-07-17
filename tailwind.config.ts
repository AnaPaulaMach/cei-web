import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "cei-blue": "#2d5688",
        "cei-sky": "#4677a8",
        "cei-terminal": "#3b966b",
        "cei-window": "#d8dbe1",
        "cei-shadow": "#172131",
        "cei-alert": "#d8b84a"
      },
      boxShadow: {
        "xp-window": "inset 1px 1px 0 #eef2f7, inset -1px -1px 0 #74869e, 0 7px 18px rgba(3, 9, 20, 0.3)",
        "pixel": "2px 2px 0 rgba(5, 15, 34, 0.58)"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
        pixel: ["Courier New", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;

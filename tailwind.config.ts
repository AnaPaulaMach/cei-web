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
        "cei-blue": "#2458a6",
        "cei-sky": "#3477c5",
        "cei-terminal": "#2f9d68",
        "cei-window": "#d9dee6",
        "cei-shadow": "#122033",
        "cei-alert": "#d9b93e"
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

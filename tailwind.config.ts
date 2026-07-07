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
        "cei-blue": "#1d4ed8",
        "cei-sky": "#2563eb",
        "cei-terminal": "#22c55e",
        "cei-window": "#e5e7eb",
        "cei-shadow": "#0f2a5f",
        "cei-alert": "#fde047"
      },
      boxShadow: {
        "xp-window": "inset 1px 1px 0 #ffffff, inset -1px -1px 0 #8aa0bd, 5px 6px 0 rgba(7, 17, 31, 0.26)",
        "pixel": "3px 3px 0 rgba(15, 42, 95, 0.7)"
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

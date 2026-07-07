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
        "cei-sky": "#38bdf8",
        "cei-terminal": "#22c55e",
        "cei-window": "#e9f2ff",
        "cei-shadow": "#09245f",
        "cei-alert": "#facc15"
      },
      boxShadow: {
        "xp-window": "inset 1px 1px 0 #ffffff, inset -2px -2px 0 #7aa7e8, 8px 10px 0 rgba(7, 24, 75, 0.28)",
        "pixel": "4px 4px 0 #09245f"
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

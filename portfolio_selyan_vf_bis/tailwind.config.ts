import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#09090f",
        "forest-900": "#0f0d1a",
        "forest-700": "#2a1945",
        olive: "#7c5cac",
        copper: "#c084fc",
        bronze: "#a855f7",
        sand: "#ede4f5"
      },
      boxShadow: {
        copper: "0 20px 45px rgba(168, 85, 247, 0.22)",
        ambient: "0 30px 80px rgba(0, 0, 0, 0.50)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(rgba(255,255,255,0.04) 0.5px, transparent 0.5px)"
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    }
  },
  plugins: []
};

export default config;

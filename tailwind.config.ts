import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C0E",
        surface: "#121316",
        line: "#1C1E23",
        edge: "#24262C",
        "edge-strong": "#2A2D33",
        "edge-hover": "#3A3D45",
        fg: "#EDEDEF",
        soft: "#C9CBD1",
        muted: "#A1A3AB",
        accent: "#B6F23E",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

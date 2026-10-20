import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: token("brand"), mid: token("brand-mid"), deep: token("brand-deep") },
        signal: token("signal"),
        ink: token("ink"),
        steel: token("steel"),
        sage: token("sage"),
        mist: token("mist"),
        site: token("site"),
        line: token("line"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "Calibri", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 7vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.875rem, 3.6vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.2" }],
        lead: ["clamp(1.0625rem, 1.5vw, 1.1875rem)", { lineHeight: "1.6" }],
      },
      maxWidth: { page: "1320px" },
      keyframes: {
        kenburns: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.08)" } },
      },
      animation: { kenburns: "kenburns 7.5s ease-out forwards" },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { dark: "#0B1F3A", blue: "#0072CE", gold: "#C6A664", gray: "#E6E6E6" } },
      boxShadow: { card: "0 10px 30px rgba(0,0,0,.25)" }
    }
  },
  plugins: [],
};
export default config;
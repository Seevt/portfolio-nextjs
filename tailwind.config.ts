import { GeistSans } from "geist/font/sans";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        humane: ["var(--font-humane)"],
        geist: ["var(--font-geist-sans)"]
      },
      colors: {
        "black-primary": "hsl(0, 0%,0%)",
        "black-secondary": "hsl(0, 0%, 12%)",
        "outline-color": "hsl(0,0%,35%)"
      },
      fontSize: {
        "fluid-thin": "var(--fluid-size-thin)",
        "fluid-xs": "var(--fluid-size-xs)",
        "fluid-sm": "var(--fluid-size-sm)",
        "fluid-base": "var(--fluid-size-base)",
        "fluid-md": "var(--fluid-size-md)",
        "fluid-lg": "var(--fluid-size-lg)",
        "fluid-xl": "var(--fluid-size-xl)",
        "fluid-xxl": "var(--fluid-size-xxl)",
        "fluid-xxxl": "var(--fluid-size-xxxl)",
        "fluid-4xl": "var(--fluid-size-4xl)",
        "fluid-5xl": "var(--fluid-size-5xl)",
        "fluid-6xl": "var(--fluid-size-6xl)"
      },
      borderRadius: {
        custom: "0.25rem"
      }
    }
  },
  plugins: []
};
export default config;

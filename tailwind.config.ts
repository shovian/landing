import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        1: "0px 1px 12px #221122",
        2: "0px -1px 12px #221122",
        default: "0px 0px 24px 0px #00000014;"
      },
      colors: {
        background: {
          grey: "#F8F8F8",
          white: "#FFFFFF",
        },
        black: {
          primary: "#262728",
          secondary: "#4D4747",
          tertiary: "#6F7376",
        },
        brand: {
          accent: "#FF8427",
          green: {
            primary: "#15A670",
            secondary: "#0b9062",
            subdued: "#aaf0cd",
          },
        },
        secondary: "#5C5656",
        system: {
          danger: "#E0335E",
          inactive: "#9BA2A7",
          stroke: "#E8E8E8",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".text-h1-medium": {
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "24px",
        },
        ".text-h2-semibold": {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
        },
        ".text-h2-medium": {
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
        },
        ".text-body-semibold": {
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "20px",
        },
        ".text-body-medium": {
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "20px",
        },
        ".text-body-regular": {
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
        ".text-caption-medium": {
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "16px",
        },
        ".text-caption-regular": {
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "16px",
        },
        ".text-button-1": {
          fontSize: "15px",
          fontWeight: "600",
          lineHeight: "24px",
        },
        ".text-button-2": {
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "20px",
        },
      });
    }),
  ],
};
export default config;

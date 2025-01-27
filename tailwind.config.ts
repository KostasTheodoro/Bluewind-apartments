import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4E89", // Mediterranean Blue
          seafoam: "#54B89C", // Seafoam Green
          coral: "#E3A373",
        },
        neutral: {
          sandy: "#F4E4C1", // Sandy Beige
          slate: "#2E384D", // Slate Gray
          white: "#F9FAFB", // Off-White
          lightGray: "#E5E7EB", // Soft Light Gray (Good for subtle hover)
          mediumGray: "#D1D5DB", // Medium Neutral Gray (Slightly darker, still subtle)
        },
        secondary: {
          olive: "#6D8B74", // Olive Green
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

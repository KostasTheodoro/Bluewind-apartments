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
          DEFAULT: "#0F172A", // Deep Blue
          light: "#38BDF8", // Sky Blue
        },
        secondary: {
          DEFAULT: "#A3E635", // Sage Green
          beige: "#FEF3C7", // Warm Beige
        },
        neutral: {
          DEFAULT: "#1E293B", // Dark Slate Gray
          light: "#F1F5F9", // Cool Gray
          gray: "#E5E7EB", // Light Gray
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#0066CC",
        secondary: "#1DD2F3",
        "primary-shade-1": "#000D1A",
        "primary-shade-2": "#001A33",
        "primary-shade-3": "#003366",
        "primary-shade-4": "#80B3E6",
        "primary-shade-5": "#C0D9F3",
        "primary-shade-6": "#E0ECF9",
        "hard-gray": "#6A6A6A",
        "soft-gray": "#F5F5F5",
      },
      fontFamily: {
        sans: [
          "var(--font-general-sans)",
          "var(--font-noto-sans)",
          ...fontFamily.sans,
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config satisfies Config;

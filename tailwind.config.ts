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
        secondary: "#001A33",
        green: {
          600: "#118C4F",
        },
        "secondary-shade-1": "#E0ECF9",
        "secondary-shade-2": "#C0D9F3",
        "secondary-shade-3": "#80B3E6",
        "secondary-shade-4": "#003366",
        "secondary-shade-5": "#001A33",
        "soft-black": "#000D1A",
        "hard-gray": "#6C727F",
        "soft-gray": "#E1E1E6",
      },
      screens: {
        xs: "280px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1360px",
        hd: "1900px",
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

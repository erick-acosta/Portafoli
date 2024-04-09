import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(80.21deg, rgba(245, 116, 28, 0.5) -5.91%, rgba(12, 25, 58, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;

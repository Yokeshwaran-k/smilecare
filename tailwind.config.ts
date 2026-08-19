import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2A45",
          50: "#EEF3F8",
          100: "#D7E3EE",
          200: "#AFC7DD",
          300: "#87ABCC",
          400: "#4A78A0",
          500: "#1D4C74",
          600: "#153A5A",
          700: "#0F2C45",
          800: "#0B2A45",
          900: "#071B2E",
          950: "#050F1A",
        },
        dental: {
          DEFAULT: "#2C6FA8",
          light: "#5C93C4",
          dark: "#1E4E79",
        },
        teal: {
          DEFAULT: "#3FC5B7",
          light: "#8FE0D6",
          dark: "#2C9C90",
        },
        ivory: "#F6FAFC",
        mist: "#EAF3F8",
        charcoal: "#16263B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(11, 42, 69, 0.08)",
        card: "0 8px 30px -8px rgba(11, 42, 69, 0.12)",
        lift: "0 20px 45px -15px rgba(11, 42, 69, 0.25)",
        glow: "0 0 0 1px rgba(63, 197, 183, 0.15), 0 8px 30px -8px rgba(63, 197, 183, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

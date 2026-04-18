import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DESIGN.md light palette — all CSS-var-backed for Tailwind opacity modifiers
        bg:           "rgb(var(--color-bg) / <alpha-value>)",
        surface:      "rgb(var(--color-surface) / <alpha-value>)",
        "surface-2":  "rgb(var(--color-surface-2) / <alpha-value>)",
        accent:       "rgb(var(--color-accent) / <alpha-value>)",
        "accent-2":   "rgb(var(--color-accent-2) / <alpha-value>)",
        ink:          "rgb(var(--color-ink) / <alpha-value>)",
        subtle:       "rgb(var(--color-subtle) / <alpha-value>)",
        muted:        "rgb(var(--color-muted) / <alpha-value>)",
        charcoal:     "rgb(var(--color-charcoal) / <alpha-value>)",
        "user-bubble":"rgb(var(--color-user-bubble) / <alpha-value>)",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", '"Times New Roman"', "serif"],
      },
      animation: {
        "cursor-blink": "cursor-blink 1s steps(1) infinite",
        "fade-in":      "fade-in 0.3s ease-out",
        "slide-up":     "slide-up 0.3s ease-out",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [animate],
}

export default config

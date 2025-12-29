/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
          medium: "hsl(var(--primary-medium))",
          secondary: "hsl(var(--primary-secondary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          gold: "hsl(var(--accent-gold))",
          green: "hsl(var(--accent-green))",
          red: "hsl(var(--accent-red))",
          "gold-bright": "hsl(var(--accent-gold-bright))",
          "gold-dark": "hsl(var(--accent-gold-dark))",
          blue: "hsl(var(--accent-blue))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom background colors
        "bg-light-cyan": "hsl(var(--bg-light-cyan))",
        "bg-very-light-cyan": "hsl(var(--bg-very-light-cyan))",
        "bg-light-cyan-alt": "hsl(var(--bg-light-cyan-alt))",
        "bg-light-gray": "hsl(var(--bg-light-gray))",
        "bg-light-cyan-variant": "hsl(var(--bg-light-cyan-variant))",
        "bg-light-gray-alt": "hsl(var(--bg-light-gray-alt))",
        "bg-light-rose": "hsl(var(--bg-light-rose))",
        "bg-dark-teal": "hsl(var(--bg-dark-teal))",
        // Custom text colors
        "text-dark-gray": "hsl(var(--text-dark-gray))",
        "text-medium-gray": "hsl(var(--text-medium-gray))",
        "text-light-gray": "hsl(var(--text-light-gray))",
        // Custom border colors
        "border-light-cyan": "hsl(var(--border-light-cyan))",
        "border-primary-dark": "hsl(var(--border-primary-dark))",
        "border-dark-teal": "hsl(var(--border-dark-teal))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

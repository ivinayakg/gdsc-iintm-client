/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "contact-page-bg": "url('/contact_bg.jpg')",
        "gdsc-svg-page-bg": "url('/gdsc-bg.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "theme-colors": {
          blue: "#4285f4",
          green: "#34a853",
          yellow: "#f9ab00",
          red: "#ea4335",
        },
      },
      fontFamily: {
        "open-sans": ["Open Sans"],
        montserrat: ["Montserrat"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        "elevated-1":
          "0px 0.2px 0.2px hsl(rgba(218,220,224, 0.5) / 0.14), 0px 0.6px 0.6px -0.4px hsl(rgba(218,220,224, 0.5) / 0.13), 0px 1.2px 1.2px -0.9px hsl(rgba(218,220,224, 0.5) / 0.12), 0px 2px 2px -1.3px hsl(rgba(218,220,224, 0.5) / 0.11), 0.1px 3.3px 3.2px -1.7px hsl(rgba(218,220,224, 0.5) / 0.1), 0.1px 5.3px 5.2px -2.2px hsl(rgba(218,220,224, 0.5) / 0.1), 0.2px 8.1px 8px -2.6px hsl(rgba(218,220,224, 0.5) / 0.09), 0.3px 12.1px 11.9px -3px hsl(rgba(218,220,224, 0.5) / 0.08), 0.4px 17.3px 17px -3.4px hsl(rgba(218,220,224, 0.5) / 0.07)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

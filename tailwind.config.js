/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          light: "#0E3460",
          dark: "#061829",
        },
        cyan: {
          brand: "#00D4FF",
          light: "#80EAFF",
          dark: "#00A3CC",
        },
        orange: {
          brand: "#FF6B35",
          light: "#FF8F5E",
          dark: "#E04E1A",
        },
        gray: {
          offwhite: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        ticker: "ticker 20s linear infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(30px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        ticker: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};

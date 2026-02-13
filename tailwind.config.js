/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Rubik", "sans-serif"],
        geist: ["Poppins", "sans-serif"],
        inter: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#0c0c0c",
        foreground: "hsl(0, 0%, 98%)",
        card: {
          DEFAULT: "#0c0c0c",
          foreground: "hsl(0, 0%, 98%)",
        },
        popover: {
          DEFAULT: "#0c0c0c",
          foreground: "hsl(0, 0%, 98%)",
        },
        primary: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "#0c0c0c",
        },
        secondary: {
          DEFAULT: "hsl(217, 33%, 17%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(217, 33%, 17%)",
          foreground: "hsl(215, 20%, 65%)",
        },
        accent: {
          DEFAULT: "hsl(217, 33%, 17%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 63%, 31%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        border: "hsl(217, 33%, 17%)",
        input: "hsl(217, 33%, 17%)",
        ring: "hsl(212, 35%, 9%)",
        surface: {
          DEFAULT: "hsl(222, 40%, 14%)",
          light: "hsl(222, 35%, 18%)",
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        glow: "glow 2s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

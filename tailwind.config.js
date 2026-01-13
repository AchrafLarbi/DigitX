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
        background: "hsl(222, 47%, 11%)",
        foreground: "hsl(0, 0%, 98%)",
        card: {
          DEFAULT: "hsl(222, 47%, 11%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        popover: {
          DEFAULT: "hsl(222, 47%, 11%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        primary: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(222, 47%, 11%)",
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
      },
    },
  },
  plugins: [],
};

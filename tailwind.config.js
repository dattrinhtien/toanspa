/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B4F6C",
          light: "#1A5F7A",
          dark: "#063246",
          50: "#F0F7FA",
          100: "#D8ECF3",
          500: "#0B4F6C",
          600: "#094159",
          700: "#063246",
        },
        sage: {
          DEFAULT: "#2E7D32",
          light: "#4E9F3D",
          soft: "#E8F5E9",
          50: "#F1F8F2",
          100: "#DCEDC8",
          600: "#256628",
          700: "#1B4D1E",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          cream: "#FAF9F6",
          muted: "#F8F9FA",
          border: "#E2E8F0",
        },
        charcoal: {
          DEFAULT: "#1E293B",
          muted: "#64748B",
          soft: "#94A3B8",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-heading)", "serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 79, 108, 0.08)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px -10px rgba(11, 79, 108, 0.12)',
      }
    },
  },
  plugins: [],
};


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
          DEFAULT: "#3D2314", // Nâu đất quý phái T&T Spa
          light: "#5A3620",
          dark: "#26140A",
          50: "#FDFBF7",
          100: "#F5ECE3",
          500: "#3D2314",
          600: "#321C10",
          700: "#26140A",
        },
        gold: {
          DEFAULT: "#C59B27", // Vàng kim Gold chính thức của Logo T&T
          light: "#D4AF37",
          dark: "#A37A17",
          soft: "#FAF3E0",
          50: "#FDFBF5",
          100: "#F7EED2",
          600: "#B3861B",
          700: "#8C6710",
        },
        sage: {
          DEFAULT: "#C59B27", // Giữ tương thích với các class sage hiện có
          light: "#D4AF37",
          soft: "#FAF3E0",
          50: "#FDFBF5",
          100: "#F7EED2",
          600: "#B3861B",
          700: "#8C6710",
        },
        herbal: {
          DEFAULT: "#3A6351", // Xanh thảo mộc dưỡng sinh
          light: "#4E7C67",
          soft: "#EBF2EE",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          cream: "#FAF7F2",
          muted: "#F5EFE6",
          border: "#E8DFD5",
        },
        charcoal: {
          DEFAULT: "#2B1F17",
          muted: "#6B594E",
          soft: "#9C897E",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-heading)", "serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(61, 35, 20, 0.08)',
        'card': '0 10px 30px -5px rgba(61, 35, 20, 0.1)',
        'elevated': '0 20px 40px -10px rgba(61, 35, 20, 0.2)',
      }
    },
  },
  plugins: [],
};

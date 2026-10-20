/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        lightCanvas: "#F8FAFC", lightSurface: "#FFFFFF", lightSubtle: "#F1F5F9", lightMuted: "#E2E8F0",
        darkCanvas: "#000000", darkSurface: "#121212", darkSubtle: "#1E1E1E", darkMuted: "#2C2C2C",
        accent: { 400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8" },
        indigoGlow: { 500: "#6366F1", 600: "#4F46E5" },
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)",
      },
      boxShadow: {
        subtle: "0 2px 12px rgba(0, 0, 0, 0.04)",
        glow: "0 0 35px -5px rgba(99, 102, 241, 0.25)",
        accentGlow: "0 4px 24px rgba(59, 130, 246, 0.35)",
        solidBtn: "0 4px 14px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};

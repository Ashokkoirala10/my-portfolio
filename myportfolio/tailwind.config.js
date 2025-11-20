/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E293B", // Darker Primary
          secondary: "#334155", // Darker Secondary
          accent: "#64748B", // Accent color
          background: "#0F172A", // Dark Mode Background
        },
      },
    },
    plugins: [],
  };
  
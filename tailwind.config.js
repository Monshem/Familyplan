/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        secondary: "#2e2e2e"
      },
      container: {
        center: true,
        padding: {
          DEFFAULT: "2rem",
          sm: "1rem",
        }
      }
    },
  },
  plugins: [],
}


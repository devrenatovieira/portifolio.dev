export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        panel: "#0b1020",
        cyan: "#22d3ee",
        violet: "#8b5cf6",
        blue: "#3b82f6"
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)"
      }
    }
  },
  plugins: []
};

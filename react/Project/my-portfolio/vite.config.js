import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // extend: {
  //   Keyframes: {
  //     blob: {
  //       "0%": { transform: "scale(1)" },
  //       "33%": { transform: "scale(1.2)" },
  //       "66%": { transform: "scale(0.8)" },
  //       "100%": { transform: "scale(1)" },
  //     },
  //   },
  //   animation: {
  //     blob: "blob 10s infinite",
  //   },
  // },
});

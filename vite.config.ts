import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      ymaps3: "./node_modules/@yandex/ymaps3-types",
    },
  },
  optimizeDeps: {
    include: ["ymaps3"],
  },
});

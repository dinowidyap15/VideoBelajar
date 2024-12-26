import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output untuk build
  },
  server: {
    port: 3000, // Port lokal untuk development
  },
  resolve: {
    alias: {
      "@": "/src", // Alias untuk folder src
    },
  },
});

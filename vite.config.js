import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ¡No elimines esto!

export default defineConfig({
  plugins: [react()], // Mantén el plugin de React
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

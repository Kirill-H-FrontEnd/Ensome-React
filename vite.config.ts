import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: "/src/Components",
      Data: "/src/Data",
      Hok: "/src/hok",
      Hooks: "/src/Hooks",
      Images: "/src/Images",
      Models: "/src/Models",
      Pages: "/src/Pages",
    },
  },
});

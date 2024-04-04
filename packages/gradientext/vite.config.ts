import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      "@shared/utils": path.resolve(__dirname, "../../shared/utils"),
      "@shared/components": path.resolve(__dirname, "../../shared/components"),
    },
  },
});

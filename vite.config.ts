import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "./manifest.json", dest: "dist/" }],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "main/index.html"),
        about: resolve(root, "about/index.html"),
        popup: resolve(root, "popup/index.html"),
      },
    },
  },
});

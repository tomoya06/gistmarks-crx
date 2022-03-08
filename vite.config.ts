import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

const scripts = ["background"];

const scriptInputs: Record<string, string> = {};
scripts.forEach((name) => {
  scriptInputs[`scripts_${name}`] = resolve(__dirname, `scripts/${name}.ts`);
});

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
      "@": resolve(__dirname),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "main/index.html"),
        about: resolve(root, "about/index.html"),
        popup: resolve(root, "popup/index.html"),
        create: resolve(root, "create/index.html"),

        // scripts
        ...scriptInputs,
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.startsWith("scripts_")) {
            return `scripts/${chunkInfo.name.split("scripts_")[1]}.js`;
          }
          return "assets/[name].js";
        },
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});

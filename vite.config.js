import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    host: true,
    port: 3000,
    hot: true,
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`,
      },
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
});

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import { terser } from "rollup-plugin-terser";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = "./";

export default defineConfig({
  root: "src",
  base,
  mode,
  envDir: "../",
  publicDir: "../public",
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },
  assetsInclude: ["**/*.json"],
  build: {
    outDir: "../dist",
    assetsDir: "./",
    css: {
      postcss,
    },
    rollupOptions: {
      plugins: [
        terser()
      ]
    }
  },
  optimizeDeps: {
    include: ["@babel/preset-env"]
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [react()],
     css: {
          postcss: {
               plugins: [tailwindcss, autoprefixer],
          },
     },
     build: {
          outDir: "dist",
          target: "es2015",
     },
     server: {
          port: 3000,
          open: true,
     },
});

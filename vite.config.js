import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; 
import process from "node:process";

export default defineConfig(({command}) => ({
  base: command === "build"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/").pop() ?? "innotech-website"}/`
    : "/",
  plugins: [
    react(),
    tailwindcss(), 
  ],
}));

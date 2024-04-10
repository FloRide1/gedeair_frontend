import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VueDevTools()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },

    server: {
        proxy: {
            "^/api/.*": {
                target: process.env.BACKEND_URL || import.meta.url + "/api",
                rewrite: (path) => path.replace(/^\/api/, ""),
                changeOrigin: true,
            },
        },
    },
});

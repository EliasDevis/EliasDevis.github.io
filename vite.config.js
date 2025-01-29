import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src/app"),
            styles: resolve(__dirname, "src/styles"),
        },
    },
    publicDir: resolve(__dirname, "src/assets"),
    server: {
        port: 9000,
    },
});

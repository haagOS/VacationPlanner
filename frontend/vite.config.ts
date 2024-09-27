import react from "@vitejs/plugin-react"
import { defineConfig as defineViteConfig, mergeConfig } from "vite"
import mkcert from "vite-plugin-mkcert"
import { defineConfig as defineVitestConfig } from "vitest/config"

const viteConfig = defineViteConfig({
  plugins: [react(), mkcert()],
})

const vitestConfig = defineVitestConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "happy-dom",
  },
})

export default mergeConfig(viteConfig, vitestConfig)

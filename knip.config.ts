import type { KnipConfig } from "knip"

const config: KnipConfig = {
  entry: ["app/**/*.{ts,tsx}"],
  project: ["**/*.{ts,tsx}"],
  ignore: ["**/*.d.ts", "app/sandbox/**"],
  ignoreDependencies: [
    // CSS - used by config files
    "tailwindcss",
    // ESLint - used via eslint.config.mjs
    "eslint-config-next",
  ],
}

export default config

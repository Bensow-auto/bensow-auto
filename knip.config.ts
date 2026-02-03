import type { KnipConfig } from "knip"

const config: KnipConfig = {
  entry: ["app/**/*.{ts,tsx}"],
  project: ["**/*.{ts,tsx}"],
  ignore: [
    "**/*.d.ts",
    "app/sandbox/**",
    // Unused but kept for future use
    "components/ui/index.ts",
    "components/layout/Footer/**",
    "styles/animations.ts",
    "styles/tokens.ts",
    // Composables - some unused but kept for future use
    "composables/**",
  ],
  ignoreDependencies: [
    // CSS - used by config files
    "tailwindcss",
    // ESLint - used via eslint.config.mjs
    "eslint-config-next",
  ],
  ignoreExportsUsedInFile: true,
  // Ignore unused exports in style files and UI components (kept for future use)
  rules: {
    exports: "off",
    types: "off",
  },
}

export default config

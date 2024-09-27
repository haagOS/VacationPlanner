import typescriptParser from "@typescript-eslint/parser"
import typescript from "@typescript-eslint/eslint-plugin"
import reactHooks from "eslint-plugin-react-hooks"
import react from "eslint-plugin-react"

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      ...react.configs["jsx-runtime"].languageOptions,
    },
    plugins: {
      "react-hooks": reactHooks,
      "@typescript-eslint": typescript,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...typescript.configs["recommended"].rules,
      ...react.configs["jsx-runtime"].rules,
    },
  },
]

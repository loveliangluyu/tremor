import js from "@eslint/js"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import storybook from "eslint-plugin-storybook"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"

export default [
  {
    ignores: ["dist/", "node_modules/", "storybook-static/"],
  },
  js.configs.recommended,
  ...tsPlugin.configs["flat/recommended"],
  reactHooks.configs.flat.recommended,
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
      "storybook/no-renderer-packages": "off",
      "storybook/no-uninstalled-addons": "off",
    },
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]

// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "dist/**", "build/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      // 🔒 Best practices
      "eqeqeq": "warn",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off",

      // 🎯 Code style
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
    },
  },

  // ESLint recommended rules
  js.configs.recommended,
];

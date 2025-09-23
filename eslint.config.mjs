import { resolve } from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import stylistic from "@stylistic/eslint-plugin";

export default [
  includeIgnoreFile(resolve(".gitignore")),
  {
    files: ["**/*.js", "**/*.mjs"],
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "camelcase": ["error"],
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
      "@stylistic/linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/no-extra-semi": "error",
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/space-before-function-paren": ["error", "always"],
      "@stylistic/multiline-ternary": ["error", "never"],
      "@stylistic/member-delimiter-style": ["error", { multiline: { delimiter: "semi" }, singleline: { delimiter: "comma" } }],
      "@stylistic/arrow-spacing": ["error", { before: true, after: true }],
      "@stylistic/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/comma-spacing": ["error", { after: true, before: false }],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/key-spacing": ["error", { afterColon: true, beforeColon: false }],
      "@stylistic/keyword-spacing": ["error", { after: true, before: true }],
      "@stylistic/object-curly-newline": "off",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      "@stylistic/one-component-per-file": "off",
      "@stylistic/require-default-prop": "off",
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
      "@stylistic/quote-props": ["error", "consistent-as-needed"],
      "@stylistic/arrow-parens": ["error", "as-needed", { requireForBlockBody: true }]
    }
  }
];

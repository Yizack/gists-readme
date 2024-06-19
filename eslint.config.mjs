import eslint from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ignores: [
      "node_modules/**/*",
      "build/**/*",
      "dist/**/*",
      ".output/**/*",
      "docs/**/*",
    ],
    rules: {
      ...eslint.configs.recommended.rules,
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "linebreak-style": ["error", "windows"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "camelcase": "off",
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "no-console": ["error", {
        "allow": ["info", "warn"]
      }],
      "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
      "no-multi-spaces": "error",
      "space-before-blocks": "error",
      "no-trailing-spaces": "error",
      "no-undef": "off"
    }
  }
];

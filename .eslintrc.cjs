module.exports = {
  "env": {
    "node": true,
    "es2021": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
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
  }
};

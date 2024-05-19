/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    es2024: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "promise/always-return": [
      "error",
      {
        ignoreLastCallback: true,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "tailwindcss/no-custom-classname": "off",
  },
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
      ],
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/array-type": ["error", { default: "generic" }],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            fixStyle: "inline-type-imports",
            prefer: "type-imports",
          },
        ],
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: { attributes: false },
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/restrict-template-expressions": "error",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: true,
      typescript: true,
    },
    react: {
      version: "detect",
    },
  },
};

module.exports = config;

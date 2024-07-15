module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "import", "prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["vite.config.ts"],
      },
    ],
    "max-lines-per-function": ["error", 40],
    "no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1, 40],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
  },
};

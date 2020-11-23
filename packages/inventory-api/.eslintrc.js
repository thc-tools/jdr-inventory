module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["airbnb-typescript/base", "prettier", "prettier/@typescript-eslint"],
    rules: {
        "import/prefer-default-export": "off",
    },
    parserOptions: {
        project: __dirname + "/tsconfig.json",
    },
};

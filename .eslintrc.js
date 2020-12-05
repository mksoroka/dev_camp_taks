module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
    ],
    plugins: [
        'react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
};
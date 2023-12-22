/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'prettier',
    ],
    parserOptions: {
        project: '*/tsconfig.json',
    },
    ignorePatterns: [
        '.eslintrc.js',
        'tailwind.config.js',
        'prettier.config.js',
        'postcss.config.js',
        'next.config.js',
    ],
    rules: {
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
    },
};

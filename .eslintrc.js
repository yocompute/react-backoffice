module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};

module.exports = {
    "env": {
        browser: true,
        "es2021": true,
        node: true, // Nota la virgola qui
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],

    "rules": {
        // Disabilita la regola che impedisce più elementi radice nel template
        "vue/no-multiple-template-root": "off",
        "vue/multi-word-component-names": "off",
    }
};

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
    rules: {
        "@stylistic/indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],

        "@stylistic/quotes": ["error", "double"],
        "vue/html-quotes": ["error", "double"],

        "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    },
})

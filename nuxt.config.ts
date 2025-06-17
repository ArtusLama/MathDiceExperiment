import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "shadcn-nuxt",
        "@vueuse/nuxt",
        "@pinia/nuxt",
    ],
    devtools: { enabled: true },

    app: {
        head: {
            title: "Würfel-Experiment Simulation",
        },
    },

    css: ["~/assets/css/tailwind.css"],
    compatibilityDate: "2025-05-15",
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },
})

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,vue,ts}",
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#2c3e50',
                'secondary': '#ff7f50',
                'accent': '#f1c40f',
            },
        },
    },
    plugins: []
}

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#2c3e50',
                'secondary': '#ff7f50',
                'accent': '#f1c40f',
            },
            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                script: ['Dancing Script', 'cursive'],
                luxury: ['Great Vibes', 'cursive'],
            }
        },
    },
    plugins: [],
}
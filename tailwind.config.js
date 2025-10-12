// tailwind.config.js

const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // This creates an absolute path to your app directory, which is the most reliable way.
        join(__dirname, './app/**/*.{vue,js,ts,jsx,tsx}'),
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
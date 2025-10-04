/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./app/**/*.{js,vue,ts}",
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

    },
  },
  plugins: []
}


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
      screens: {
        'sm': '840px',         // Small screens (default in Tailwind)
        'md': '868px',         // Medium screens (default in Tailwind)

        'lg': '1024px',        // Large screens (default in Tailwind)
        'xl': '1280px',        // Extra large screens (default in Tailwind)
        '2xl': '1536px',       // 2x Extra large screens (default in Tailwind)

        'lg-md': '900px',      // Custom large-medium screens (900px)
        'lg-sm': '750px',      // Custom large-small screens (750px)
      },
    },
  },
  plugins: [],
}

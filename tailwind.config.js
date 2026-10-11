/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f1ebe1',   // page background
        ivory: '#fbf8f2',   // tiles
        sand: '#e7d9c4',    // chips, soft fills
        ink: '#241c17',     // text
        espresso: '#2a1f19', // dark tiles
        clay: { DEFAULT: '#bf5530', deep: '#9e4221', soft: '#f2dccd' },
        ochre: '#d99a4e',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        grotesk: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

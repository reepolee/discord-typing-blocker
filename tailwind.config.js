const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: ["./src/popup/**/*.{svelte,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};

export default {
  plugins: {
    "postcss-nesting": true,
    cssnano: true,
    "postcss-purgecss": {
      content: ["src/**/*.html"],
      css: ["src/**/*.css"]
    },
    autoprefixer: true
  }
};

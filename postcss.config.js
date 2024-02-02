module.exports = {
  plugins: [
    require("postcss-nested"),
    //  "postcss-preset-env",
    require("postcss-preset-env")({
      browsers: ["> 1%", "last 2 versions"],
    }),
    require("autoprefixer"),
  ],
};

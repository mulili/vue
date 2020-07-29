const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.join(__dirname, "src"))
      .set("@style", path.join(__dirname, "src/assets/style"))
      .set("@utils", path.join(__dirname, "src/utils/index"))
      .set("@common", path.join(__dirname, "src/common"));
  },
  devServer: {
    port: 9999,
  },
  assetsDir: process.env.NODE_ENV === "production" ? "./travel/" : "./",
};

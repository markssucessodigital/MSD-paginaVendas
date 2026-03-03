const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
      },
    },
  ],
  style: {
    postcss: {
      mode: "file",
    },
  },
};

const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        config: path.resolve(__dirname, "src/config"),
        components: path.resolve(__dirname, "src/components"),
        pages: path.resolve(__dirname, "src/pages"),
        services: path.resolve(__dirname, "src/services"),
        src: path.resolve(__dirname, "src"),
        store: path.resolve(__dirname, "src/store"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
};

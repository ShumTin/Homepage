const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  productionSourceMap: false, // 关闭生产环境 map 文件生成
  transpileDependencies: [],
  lintOnSave: false,
  publicPath: "./", // 相对路径
  devServer: {
    proxy: {
      "/api": { target: "http://test.my-site.com" },
    },
  },
  configureWebpack: require("./webpack.config"),
});

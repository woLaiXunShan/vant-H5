const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const Timestamp = new Date().getTime()
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set("@img", resolve("src/images"))
  },
  devServer: {
    disableHostCheck: true,
	// 	// open: true, // 是否自动弹出浏览器页面
	// 	host: "127.0.0.1",
	// 	port: '8080',
	// 	// proxy: {
	// 	// 	'/api': {
	// 	// 		target: 'http://10.10.16.52:8383/',   // 请求服务器根路径,这里必须加上 http/https://
	// 	// 		changeOrigin: true,    // 是否跨域
	// 	// 		ws: true,   // websocket
	// 	// 		pathRewrite: {    // 重写路径:
	// 	// 			'^/api': '/api/'
	// 	// 		}
	// 	// 	}
	// 	// }
	},
  // configureWebpack 这部分打包文件添加时间戳，防止缓存不更新
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`
    },
  },
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
}
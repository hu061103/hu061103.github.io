// webpack 基本的配置文件 
// 入口
// 出口
// 模块定义loader   module  js/css/scss/png  vue  jsx(javascript XML) 
// source-map 调试
// plugins 
// devServer
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");//操作html
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");  //自动打开浏览器
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");   //样式抽离
const webpack = require("webpack");

module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash:8].js",
        publicPath:"",
    },
    devtool: "source-map",  //方便调试
    
    resolve: {
        alias: {    //别名
            "@": path.resolve("src"),
            "&": path.resolve("src/utils"),
            "~":path.resolve("src/scripts")
        }
    },



    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,  // 1024 * 8  8M 
                            name:"imgs/[name].[hash:8].[ext]",  // 1.jpg ==> 1.q3w34e4r.jpg 
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",    // 转为 commonJS 模块
                        {
                            loader: "postcss-loader",  // css 代码转换 
                            options: {
                                plugins: function () {
                                    return [
                                        require("cssgrace"),  //css 代码美化
                                        require("autoprefixer"),   // 自动补全 webkit moz ms
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit: 100,
                                                exclude:/autd-mobile/i
                                            }
                                            // 自动计算 rem  
                                        )
                                    ]
                                }
                            }
                        },
                        "sass-loader"   // 编译sass 为 css
                    ]
                })
            },
            {
                test: /\.(css|less)$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",    // 转为 commonJS 模块
                        {
                            loader: "postcss-loader",  // css 代码转换 
                            options: {
                                plugins: function () {
                                    return [
                                        require("cssgrace"),  //css 代码美化
                                        require("autoprefixer"),   // 自动补全 webkit moz ms
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit: 100,
                                                exclude:/autd-mobile/i
                                            }
                                            // 自动计算 rem  
                                        )
                                    ]
                                }
                            }
                        },
                        "less-loader"   // 编译less 为 css
                    ]
                })
            }



        ]  
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 6011,
        // open: true,
        publicPath: "",
        proxy: {
            "/apv": {
                target: "http://localhost:1906",
                changeOrigin:true
            }
        }
    },



    //插件

    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            inject:true,
        }),
        new openBrowserWebpackPlugin({
            url:"http://localhost:6011"
        }),
        new extractTextWebpackPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true,  // 打包全部样式
            disable:false  //  抽离  不失效  可以样式抽离 
        }),
        new webpack.ProvidePlugin({
            React: "React",
            Component:["react","Component"]
        })
    ]

}



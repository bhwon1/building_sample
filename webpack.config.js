const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // npm start 기본 세팅

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            //해당 플러그인을 사용 하려면 webpack 이 필요
            $: "jquery",
            jQuery: "jquery",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"), // html 위치
            filename: "guide.html", // 출력 파일 이름 지정
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"), // static 으로 설정해야함.
        open: true, // 브라우저 열기
        port: 8080,
    },
};

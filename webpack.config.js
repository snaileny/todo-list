const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: "development",
    entry: {

        index: path.resolve(__dirname, "src/index.js"),

    },
    output: {

        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,

    },
    plugins: [

        new HtmlWebpackPlugin({

            scriptLoading: "module",
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html")

        }),

    ],
    module: {

        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],

    },
    devServer: {

        static: {

            directory: path.resolve(__dirname, "dist")
            
        },
        watchFiles: ["src/index.html"],
        port: 3000,
        open: true,
        hot: true

    }

}
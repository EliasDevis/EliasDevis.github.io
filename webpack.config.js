const { resolve, join } = require("path");
const plugins = {
    html: require("html-webpack-plugin"),
    css: require("mini-css-extract-plugin"),
    copy: require("copy-webpack-plugin"),
    json: require("json-minimizer-webpack-plugin")
}

module.exports = {
    entry: {
        index: "./src/app/index.js",
        spaHandler: "./src/app/spaHandler.js",
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: "js/[name].js",
        chunkFilename: "js/[chunkhash].js"
    },
    mode: "development",
    plugins: [
        new plugins.html({
            template: "src/templates/index.ejs",
            filename: "index.html",
            excludeChunks: ["spaHandler"],
            title: "Elias Portfolio",
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': '#C778DD',
            }
        }),
        new plugins.html({
            template: "src/templates/404.ejs",
            filename: "404.html",
            chunks: ["spaHandler"]
        }),
        new plugins.css({
            filename: "css/[name].css",
            chunkFilename: (pathData) => {
                if (typeof pathData.chunk.id === "number") return "css/[name].css"
                const name = pathData.chunk.id.split("_").at(-2).toLowerCase()

                return `css/${name}.css`
            }
        }),
        new plugins.copy({
            patterns: [
                { from: "src/assets/images", to: "images" },
                { from: "src/assets/locales", to: "locales" },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sass)$/,
                use: [plugins.css.loader, "css-loader", "sass-loader"],
                include: [
                    join(__dirname, "src/assets/styles")
                ]
            },
            {
                test: /\.json$/i,
                type: "asset/resource",
                include: [
                    join(__dirname, "src/assets/locales")
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                include: [
                    join(__dirname, "src/assets/images")
                ],
                type: "asset/resource",
                generator: {
                    filename: "images/[contenthash][ext]",
                }
            },
            {
                test: /\.(woff(2)?|eot|(o|t)tf)$/i,
                type: "asset/resource",
                include: [
                    join(__dirname, "src/assets/fonts/")
                ],
                generator: {
                    filename: "fonts/[contenthash][ext]",
                }
            },
        ],
    },
    devServer: {
        static: {
            directory: join(__dirname, 'dist'),
        },
        port: 9000,
        historyApiFallback: {
            rewrites: [
                { from: /./, to: "/404.html" },
            ],
        }
    },

    resolve: {
        alias: {
            "@": resolve(__dirname, "src/app/"),
            styles: resolve(__dirname, "src/assets/styles/"),
            fonts: resolve(__dirname, "src/assets/fonts/fira-code/")
        },
    },
    optimization: {
        minimize: true,
        minimizer: [
            new plugins.json(),
        ],
    },

};

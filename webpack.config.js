module.exports = {
    entry: {
        javascript: "./app/js/app.js",
        html: "./app/index.html"
    },
    output: {
        path: __dirname + "/server/src/main/resources/ui/dist",
        //path: __dirname + "/dist",
        filename: "./js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", 'babel?' + JSON.stringify(
                    {
                        presets: ['react', 'es2015'],
                        "plugins": [
                            "syntax-class-properties",
                            "syntax-decorators",
                            "syntax-object-rest-spread",
                            "transform-class-properties",
                            "transform-object-rest-spread"
                        ]
                    }
                )]
            },
            {
                test: /\.scss$|.css$/,
                loader: 'style!css!sass'
            },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    }
};
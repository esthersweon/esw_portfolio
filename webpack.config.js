module.exports = {
    entry: "./src/app.jsx",
    output: {
        filename: "build/js/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            projectsData: __dirname + '/data/projects.json'
        }
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
        ]
    }
};
module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devtool: 'inlineSourceMap',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    }
}
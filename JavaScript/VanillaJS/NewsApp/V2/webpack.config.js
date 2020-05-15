const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        app: ['babel-polyfill', './js/script.js'],
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        publicPath: '/',
        port: 8000,
        contentBase: path.join(process.cwd(), 'src'),
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        hot: true,
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                test: /\.js$/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [precss, autoprefixer],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: './style.css' }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: isProduction,
                collapseWhitespace: isProduction,
            },
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js',
    },
    mode: 'development',
};

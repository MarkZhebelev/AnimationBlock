import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import MiniCssExtractPlugin from "mini-css-extract-plugin";
type Mode = 'development' | 'production';

interface EnvironmentVariables {
    mode: Mode
}
export default (env: EnvironmentVariables) => {
    const isDev = env.mode === 'development';
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
            clean: true
        },

        resolve: {
            extensions: ['.tsx','.ts','.js'],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'], // для обработки CSS файлов
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                    type: 'asset/resource', // для обработки файлов изображений
                },
                {
                    test: /\.(ttf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            !isDev && new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new CleanWebpackPlugin(),
            ...(env.mode === 'production' ? [new BundleAnalyzerPlugin()] : []),
            // new BundleAnalyzerPlugin({
            //     analyzerPort: 8889, // Указываем нужный порт
            //     openAnalyzer: true, // Открывать автоматически
            // }),
        ],
        devtool: isDev ?  'inline-source-map' : false,
        devServer: isDev ? {
            port: 3000,
            open: true,
            static: './dist',
            historyApiFallback: true,
        } : undefined,
    }
    return config
}

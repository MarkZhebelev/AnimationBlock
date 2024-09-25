import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
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
            filename: "[name].[contenthash].bundle.js",
            clean: true
        },
        performance: {
            hints: isDev ? false : 'warning',
            maxAssetSize: 512000, // 500 KiB
            maxEntrypointSize: 512000, // 500 KiB
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'], // для обработки CSS файлов
                },
                {
                    test: /\.(png|jpe?g|gif|webp)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name].[contenthash][ext]',
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[contenthash][ext]',
                    }
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

            // ...(env.mode === 'production' ? [new BundleAnalyzerPlugin()] : []),
            // new BundleAnalyzerPlugin({
            //     analyzerPort: 8889, // Указываем нужный порт
            //     openAnalyzer: true, // Открывать автоматически
            // }),

        ],
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: 3000,
            open: true,
            static: './dist',
            historyApiFallback: true,
        } : undefined,
        optimization: {
            usedExports: true,
            runtimeChunk: 'single',
            minimize: env.mode === 'production',
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                }),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module: any) {
                            const packageName = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1] || 'vendor';
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },

            },
        }

    }

    return config
}

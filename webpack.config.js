const path = require('path');

module.exports = {
    entry: {
        app: './assets/js/app.js',
        admin: './assets/js/admin.js',
        curriculum: './assets/js/curriculum.js',
        'error-handler': './assets/js/error-handler.js',
        'security-manager': './assets/js/security-manager.js',
        'api-client': './assets/js/api-client.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].bundle.js',
        clean: true,
        publicPath: '/dist/js/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../images/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../fonts/[name][ext]'
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    priority: 5
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'assets'),
            '@js': path.resolve(__dirname, 'assets/js'),
            '@css': path.resolve(__dirname, 'assets/css'),
            '@images': path.resolve(__dirname, 'assets/images'),
            '@config': path.resolve(__dirname, 'config')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './')
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    mode: process.env.NODE_ENV || 'development'
};

const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['./src/app.js', './src/app.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/js')
    },
    module: {
        rules: [{
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
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                            outputPath: '../css'
                        }
                    },
                    'extract-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            }
        ]
    },
    mode: 'production'
};

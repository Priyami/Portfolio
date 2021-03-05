const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    
   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    externals: {
        express: 'express',
      },
    resolve: {
        extensions: ['.js', '.jsx'],
       
    },
    module: {
        rules: [
            {
		test: /\.(js|mjs|jsx|ts|tsx)$/,
  		loader: 'babel-loader',
                exclude: /node_modules/,
                
            },
           
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'style-loader' 
                    },

                    { 
                        loader: 'css-loader',
                        
                    },

                     { 
                         loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [ 'autoprefixer', {}, ],
                                ],
                            },
                        }
                      },
                      {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                      }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]',
               
            }
        ],
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {from:'dist/images', to:'images'}
        ])
    
    ]
    
       
};

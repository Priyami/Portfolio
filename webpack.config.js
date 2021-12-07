const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const dotenv = require('dotenv').config({ 
    path: path.join(__dirname, '../Portfolio/.env') 
})
module.exports = {
    entry: '/src/index.js',
    
   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
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
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]',
               
            }
        ],
       
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
      },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {from:'src/images', to: 'images'}
        ]),
        new webpack.DefinePlugin( {
            "process.env": dotenv.parsed
          }),
    
    ]
    
    
       
};

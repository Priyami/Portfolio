Installing ReactJS using webpack and babel


Step 1 - Create the Root Folder

$ mkdir Portfolio
cd Portfolio

$ npm init -y

This command asks information about the module such as packagename, description, author etc.

Step 2 - install React and react dom

$ npm install react --save
$ npm install react-dom --save

Step 3 - Install webpack

$ npm install webpack webpack-dev-server webpack-cli --save

Step 4 - Install babel

$ npm install babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin --save-dev

Step 5 - Create the Files

To complete the installation, we need to create certain files namely, index.html, App.js, main.js, webpack.config.js and, .babelrc. 

Step 6 - Set Compiler, Server and Loaders

webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}

package.json

"scripts": {
    
    "start": "webpack-dev-server --open --hot --mode development ",
    "build": "webpack --mode production",
   
  }

Step 9 - Create .env file 

EMAIL=youremailaddress
REFRESH_TOKEN=Refresh_token_Ouathgoogleapi
CLIENT_SECRET=Client_secret_Ouathgoogleapi
CLIENT_ID=Client_id_Ouathgoogleapi

Step 8 - To run Portfolio project in localhost 

$  npm run start

Step 9 - Generating the bundle

Finally, to generate the bundle you need to run the build command in the command prompt as −

$ npm run build
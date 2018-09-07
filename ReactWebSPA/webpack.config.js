const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve:{
    // modulesDirectories: ['node_modules'],
    alias:{
      HomePage: path.resolve('app/components/HomePage.js'),
      AboutUs: path.resolve('app/components/AboutUs.js'),
      Contact: path.resolve('app/components/Contact.js'),
      Main: path.resolve('app/components/Main.js'),
      React: path.resolve('public/lib/react.development.js'),
      ReactDOM: path.resolve('public/lib/react-dom.development.js'),
      Header: path.resolve('app/components/Header.js'),
      Footer: path.resolve('app/components/Footer.js'),
      CategoryMenu: path.resolve('app/components/CategoryMenu.js'),
      ProductHomePage: path.resolve('app/components/ProductHomePage.js'),
      ProductHomePageBig: path.resolve('app/components/ProductHomePageBig.js'),
      ProductInCategory: path.resolve('app/components/ProductInCategory.js'),
      Category: path.resolve('app/components/Category.js'),
      SlideBanner: path.resolve('app/components/SlideBanner.js'),
    }
  },
  module:{
    rules:[
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

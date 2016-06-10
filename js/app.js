var React = require('react');
var ReactDOM = require('react-dom');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.jsx');

// load mock product data into localStorage
ProductData.init();

// locad mock API call
CartAPI.getProductData();

// Render
ReactDOM.render(
  <FluxCartApp />,
  document.getElementById('app');
);
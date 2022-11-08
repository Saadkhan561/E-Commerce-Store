import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CartContextProvider from './contexts/cartContext';

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById('root')
);

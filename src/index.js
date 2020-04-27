// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Local imports
import App from './App';
import { store } from './store';
// Assets
import './assets/main.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Local imports
import App from './App';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
// Assets
import './assets/main.css';
require('typeface-montserrat')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();

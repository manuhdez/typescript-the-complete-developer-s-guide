import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/reducer';

import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <App name="Albert" />
  </Provider>,
  document.getElementById('root')
);

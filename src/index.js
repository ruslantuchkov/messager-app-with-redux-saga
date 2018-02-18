import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import getStore from './getStore';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = getStore(preloadedState);

ReactDOM.hydrate(
  <Provider store={store} >
    <App/>
  </Provider>, document.getElementById('AppContainer'));

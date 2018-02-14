import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import getStore from './getStore';

const defaultState = window.__defaultState__;
delete window.__defaultState__;
const store = getStore(defaultState);

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>, document.getElementById('AppContainer'));

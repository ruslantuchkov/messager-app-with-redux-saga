import {createStore} from 'redux';


export default function (defaultState={}) {
  
  return createStore((state, action) => state, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
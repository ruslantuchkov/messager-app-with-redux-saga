import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import * as sagas from './sagas';
import {runSagas} from './utility';
import io from 'socket.io-client';

const socket = io('http://localhost:9090');

export default function (defaultState={}) {
  const reducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, defaultState, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
  runSagas(sagaMiddleware, sagas);
  socket.on('NEW_MESSAGE', (payload) => {
    payload.activeChannel = store.getState().activeChannel;
    store.dispatch({type: 'RECEIVE_MESSAGE', payload});
  })
  return store;
}
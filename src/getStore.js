import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import * as sagas from './sagas';
import {runSagas} from './utility';

export default function (defaultState={}) {
  const reducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, defaultState, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
  runSagas(sagaMiddleware, sagas);
  return store;
}
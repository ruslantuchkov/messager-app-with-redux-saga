import fetch from 'isomorphic-fetch';
import {takeLatest, call, put} from 'redux-saga/effects';

function* putNewChannel({payload: {id, name, participants}}) {
  const response = yield call(fetch, `http://localhost:9090/channel/create/${id}/${name}/${JSON.stringify(participants)}`);
  const channel = yield response.json();
  channel.fetchStatus = 'FETCHED';
  yield put({type: 'SET_CHANNEL_INFO', payload: {newChannel: channel}});
  yield put({type: 'SET_ACTIVE_CHANNEL', id});
}

export function* putNewChannelSaga() {
  yield takeLatest('SET_NEW_CHANNEL', putNewChannel); 
}
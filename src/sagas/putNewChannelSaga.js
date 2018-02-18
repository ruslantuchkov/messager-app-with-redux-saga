import fetch from 'isomorphic-fetch';
import {takeLatest, call, put} from 'redux-saga/effects';

function* putNewChannel({payload: {id, name, participants}}) {
  const response = yield call(fetch, `http://localhost:9090/channel/create/${id}/${name}/${JSON.stringify(participants)}`);
  if (response.status !== 300) {
    yield put({type: 'REJECT_CHANNEL_CREATION', payload: {id}});
    return;
  }
  const channel = yield response.json();
  channel.fetchStatus = 'FETCHED';
  yield put({type: 'SET_CHANNEL_INFO', payload: {newChannel: channel}});
}

export function* putNewChannelSaga() {
  yield takeLatest('REQUEST_CREATE_CHANNEL', putNewChannel); 
}
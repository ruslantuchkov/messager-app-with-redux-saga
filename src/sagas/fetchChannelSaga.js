import fetch from 'isomorphic-fetch';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import {channelSelector} from '../selectors';

function* fetchChannel({id}) {
  const channel = yield select(channelSelector(id));
  if (channel && channel.fetchStatus === 'FETCHED') return;
  const response = yield call(fetch, `http://localhost:9090/channel/${id}`);
  const newChannel = yield response.json();
  newChannel.fetchStatus = 'FETCHED';
  yield put({type: 'SET_CHANNEL_INFO', payload: {newChannel}});
}

export function* fetchChannelSaga () {
  yield takeLatest('SET_ACTIVE_CHANNEL', fetchChannel);
}
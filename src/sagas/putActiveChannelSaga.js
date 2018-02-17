import fetch from 'isomorphic-fetch';
import {call, takeLatest, select} from 'redux-saga/effects';
import {currentUserSelector} from '../selectors';

function* putActiveChannel({id}) {
  const currentUser = yield select(currentUserSelector);
  yield call(fetch, `http://localhost:9090/user/activeChannel/${currentUser.id}/${id}`);
}

export function* putActiveChannelSaga() {
  yield takeLatest('SET_ACTIVE_CHANNEL', putActiveChannel);
}
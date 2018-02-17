import fetch from 'isomorphic-fetch';
import {call, takeLatest, select} from 'redux-saga/effects';
import {currentUserSelector} from '../selectors';

function* putCurrentUserStatus({status}) {
  const currentUser = yield select(currentUserSelector);
  yield call(fetch, `http://localhost:9090/status/${currentUser.id}/${status}`);
}

export function* putCurrentUserStatusSaga() {
  yield takeLatest('STATUS_CHANGE', putCurrentUserStatus);
}
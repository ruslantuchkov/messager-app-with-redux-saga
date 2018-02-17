import fetch from 'isomorphic-fetch';
import {takeEvery, call, select, put, fork, all} from 'redux-saga/effects';
import {userInfoSelector} from '../selectors';

function* fetchUserInfo(id) {
  const response = yield call(fetch, `http://localhost:9090/user/${id}`);
  const user = yield response.json();
  yield put({type: 'SET_USER_INFO', user});
}

function* fetchUsersInfo({payload: {newChannel: {participants}}}) {
  const userInfo = yield select(userInfoSelector);
  const userIds = participants
    .filter(participant => !userInfo.some(({id}) => id === participant));
  yield all(userIds.map(userId => call(fetchUserInfo, userId)));
}

export function* fetchUserInfoSaga() {
  yield takeEvery('SET_CHANNEL_INFO', fetchUsersInfo);
}
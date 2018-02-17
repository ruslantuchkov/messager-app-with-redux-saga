import fetch from 'isomorphic-fetch';
import {actionChannel, call, take} from 'redux-saga/effects';

export function* putMessageSaga() {
 let chan = yield actionChannel('SUBMIT_CHANNEL_INPUT_TEXT');
 while (true) {
  const {payload: {messageId, channel, value, owner}} = yield take(chan);
  yield call(fetch, `http://localhost:9090/input/submit/${owner}/${channel}/${messageId}/${value}`);
 }
}
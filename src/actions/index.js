import {chance} from '../utility';

export const ONLINE = `ONLINE`;
export const OFFLINE = `OFFLINE`;
export const AWAY = `AWAY`;
export const FETCHED =`FETCHED`;
export const NOT_FETCHED = `NOT_FETCHED`;

export const submitChannelInputText = (channel, value) => (dispatch, getState) => {
  const {currentUser} = getState();
  dispatch({
    type: 'SUBMIT_CHANNEL_INPUT_TEXT', 
    messageId: chance.guid(),
    channel,
    date: new Date(),
    value,
    owner: currentUser.id
  })
}
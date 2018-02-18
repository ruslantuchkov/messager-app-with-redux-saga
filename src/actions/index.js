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
    payload: {
      messageId: chance.guid(),
      channel,
      date: new Date(),
      value,
      owner: currentUser.id
    }
  })
}

export const openContactChannel = (userId) => (dispatch, getState) => {
  const {channels, currentUser, userInfo} = getState();
  const {name} = userInfo.find(({id}) => id === userId);
  const channel = channels.find(({participants}) => participants.length === 2 && participants.includes(userId));
  if (channel) {
    dispatch({type: 'SET_ACTIVE_CHANNEL', payload: {id: channel.id}});
  } else {
    const channelId = chance.guid();
    dispatch({
      type: 'REQUEST_CREATE_CHANNEL',
      payload: {
        id: channelId,
        name: `${currentUser.name}'s and ${name}'s Private Chat`,
        participants: [currentUser.id, userId],
      }
    })
    dispatch({type: 'SET_ACTIVE_CHANNEL', payload: {id: channelId}});
  }
}
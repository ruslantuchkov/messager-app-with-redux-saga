export const unreadedChannels = (state = {}, {type, payload}) => {
  if (type === 'RECEIVE_MESSAGE') {
    if (payload.activeChannel !== payload.channelID) {
      return {
        ...state, 
        [payload.channelID]: state[payload.channelID] + 1 || 1
      }
    }
  }
  if (type === 'SET_ACTIVE_CHANNEL') {
    return {
      ...state,
      [payload.id]: 0
    }
  }
  return state;
};
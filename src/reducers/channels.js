export const channels = (state = null, {type, value, channel, messageId, date, owner}) => {
  if (type === 'UPDATE_CHANNEL_INPUT_TEXT') {
    const idx = state.findIndex(({id}) => id === channel);
    return [
      ...state.slice(0, idx),
      {...state[idx], currentUserText: value},
      ...state.slice(idx+1)
    ]
  }
  if (type === 'SUBMIT_CHANNEL_INPUT_TEXT') {
    const idx = state.findIndex(({id}) => id === channel);
    return [
      ...state.slice(0, idx),
      {
        ...state[idx], 
        currentUserText: null, 
        messages: [
          ...state[idx].messages, 
          {
            id: messageId,
            owner,
            date,
            content: {text: value}
          }
        ]
      },
      ...state.slice(idx+1)
    ]
  }
  return state;
}
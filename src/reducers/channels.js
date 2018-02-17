export const channels = (state = null, {type, payload}) => {
  if (type === 'UPDATE_CHANNEL_INPUT_TEXT') {
    const idx = state.findIndex(({id}) => id === payload.channel);
    return [
      ...state.slice(0, idx),
      {...state[idx], currentUserText: payload.value},
      ...state.slice(idx+1)
    ]
  }
  if (type === 'SUBMIT_CHANNEL_INPUT_TEXT') {
    const idx = state.findIndex(({id}) => id === payload.channel);
    return [
      ...state.slice(0, idx),
      {
        ...state[idx], 
        currentUserText: null, 
        messages: [
          ...state[idx].messages, 
          {
            id: payload.messageId,
            owner: payload.owner,
            date: payload.date,
            content: {text: payload.value}
          }
        ]
      },
      ...state.slice(idx+1)
    ]
  }
  if (type === 'SET_CHANNEL_INFO') {
    const idx = state.findIndex(({id}) => id === payload.newChannel.id);
    return [
      ...state.slice(0, idx),
      {...payload.newChannel},
      ...state.slice(idx+1)
    ]
  }

  if (type === 'SET_NEW_CHANNEL') {
    return [
      ...state, 
      {
        id: payload.id,
        name: payload.name,
        messages: payload.messages,
        participants: payload.participants,
        fetchStatus: payload.fetchStatus
      }
    ]
  }
  return state;
}
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

  if (type === 'REQUEST_CREATE_CHANNEL') {
    return [
      ...state, 
      {
        id: payload.id,
        name: payload.name,
        messages: [],
        participants: payload.participants,
        fetchStatus: 'FETCHING'
      }
    ]
  }

  if (type === 'RECEIVE_MESSAGE') {
    const idx = state.findIndex(({id}) => id === payload.channelID);
    const channel = state[idx];
    if (channel && channel.fetchStatus === 'FETCHED' && !channel.messages.find(({id}) => id === payload.id)) {
      return [
        ...state.slice(0, idx),
        {
          ...channel, 
          messages: [...channel.messages, {
            id: payload.id,
            content: payload.content,
            owner: payload.owner
          }]
        },
        ...state.slice(idx+1)
      ]
    }
  }
  if (type === 'REJECT_CHANNEL_CREATION') {
    const idx = state.findIndex(({id}) => id === payload.id);
    return [
      ...state.slice(0, idx),
      ...state.slice(idx+1)
    ]
  }
  return state;
}
export const activeChannel = function(state = null, {type, payload}) {
  if (type === 'SET_ACTIVE_CHANNEL' ) {
    return payload.id;
  }
  return state;
}
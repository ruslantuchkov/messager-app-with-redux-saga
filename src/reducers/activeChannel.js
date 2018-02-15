export const activeChannel = function(state = null, {type, id}) {
  if (type === 'SET_ACTIVE_CHANNEL' ) {
    return id;
  }
  return state;
}
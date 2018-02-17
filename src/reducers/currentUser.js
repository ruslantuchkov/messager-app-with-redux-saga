export const currentUser = (state = null, {type, status}) => {
  if (type === 'STATUS_CHANGE') {
    return {
      ...state,
      status
    }
  }
  return state;
}
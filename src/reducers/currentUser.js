export const currentUser = (state = null, {type, value}) => {
  if (type === 'STATUS_CHANGE') {
    return {
      ...state,
      status: value
    }
  }
  return state;
}
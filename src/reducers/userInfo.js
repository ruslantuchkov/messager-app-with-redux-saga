export const userInfo = (state = null, {type, user}) => {
  if (type === 'SET_USER_INFO') {
    return [...state, user]
  }
  return state;
}
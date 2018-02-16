import { createSelector } from 'reselect';

export const userInfoSelector = createSelector(
  state => state.userInfo,
  userInfo => userInfo
);
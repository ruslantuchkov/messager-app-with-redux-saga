import { createSelector } from 'reselect';

export const channelSelector = channelId => createSelector(
  state => state.channels.find(({id}) => id === channelId),
  channel => channel
)
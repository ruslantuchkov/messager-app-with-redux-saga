import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    channels: state.channels,
    activeChannel: state.activeChannel,
    unreadedChannels: state.unreadedChannels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveChannel(id) {
      dispatch({type: 'SET_ACTIVE_CHANNEL', payload: {id}})
    }
  };
}

const ChannelList = ({channels, activeChannel, setActiveChannel, unreadedChannels}) => {
  return (
    <div className='container'>
      <h3>Channels</h3>
      <div className='list-group'>
        {channels.map(channel => (
          <a href='#' 
            key={channel.id} 
            className={activeChannel === channel.id ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
            onClick={() => setActiveChannel(channel.id)}
          >
            {channel.name}
            {unreadedChannels[channel.id] > 0 ? <p>Unreaded messages: {unreadedChannels[channel.id]}</p> : null}
          </a>
        ))}
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
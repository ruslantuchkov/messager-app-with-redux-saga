import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    channels: state.channels,
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveChannel(id) {
      dispatch({type: 'SET_ACTIVE_CHANNEL', id})
    }
  };
}

const ChannelList = ({channels, activeChannel, setActiveChannel}) => {
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
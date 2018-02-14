import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    channels: state.channels.map(({id, name}) => ({id, name}))
  };
}

const ChannelList = ({channels}) => {
  return (
    <div>
      <h3>Channels</h3>
      {channels.map(channel => <div key={channel.id}><button>{channel.name}</button></div>)}
    </div>
  );
}

export default connect(
  mapStateToProps,
)(ChannelList);
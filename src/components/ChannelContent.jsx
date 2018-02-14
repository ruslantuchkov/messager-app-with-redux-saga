import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

function mapStateToProps(state) {
  const {name: channelName, messages} = state.channels.find(channel => channel.id === state.activeChannel);
  return {
    channelName,
    messages,
    status: state.currentUser.status
  };
}

const ChannelContent = ({channelName, messages, status}) => {
  return (
    <div>
      <h4>Channel: {channelName}</h4>
      {status === 'OFFLINE' ? <h5>Contacts in the channel will see you as offline.</h5> : null}
      {messages.map(message => <Message key={message.id} {...message} />)}
    </div>
  );
}

export default connect(
  mapStateToProps,
)(ChannelContent);
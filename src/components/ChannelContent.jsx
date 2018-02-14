import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const activeChannel = state.channels.find(channel => channel.id === state.activeChannel);
  return {
    channelName: activeChannel.name,
    messages: activeChannel.messages.map(m => ({...m, ownerName: state.userInfo.find(({id}) => id === m.owner).name})),
  };
}

const ChannelContent = ({channelName, messages, owners}) => {
  console.log(owners)
  return (
    <div>
      <h4>Channel: {channelName}</h4>
      {messages.map(message => <div key={message.id}><span>{message.ownerName}</span>: {message.content.text}</div>)}
      <input type="text" placeholder="Say something" /><button>Submit</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
)(ChannelContent);
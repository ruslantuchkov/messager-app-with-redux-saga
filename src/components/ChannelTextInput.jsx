import React, { Component } from 'react';
import { connect } from 'react-redux';

import {submitChannelInputText} from '../actions';

function mapStateToProps(state) {
  return {
    value: state.channels.find(({id}) => id === state.activeChannel).currentUserText || '',
    userStatus: state.currentUser.status,
    channel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateText(channel, value) {
      dispatch({type: 'UPDATE_CHANNEL_INPUT_TEXT', payload: {value, channel}})
    },
    submitMessage(channel, value) {
      dispatch(submitChannelInputText(channel, value))
    }
  };
}

const ChannelTextInput = ({value, updateText, userStatus, submitMessage, channel}) => {
  return (
    <div className='input-group'>
      <input 
        type="text" 
        className='form-control' 
        placeholder={userStatus === 'OFFLINE' ? 'You are offline' : 'Say something'}
        value={value} 
        onChange={(event) => updateText(channel, event.target.value)} 
        disabled={userStatus === 'OFFLINE'} 
      />
      <div className="input-group-append">
        <button 
          className="btn btn-outline-secondary" 
          type="button"
          onClick={() => submitMessage(channel, value)}
          disabled={userStatus === 'OFFLINE'} 
        >Submit</button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelTextInput);
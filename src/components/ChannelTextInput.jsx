import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    value: state.channels.find(({id}) => id === state.activeChannel).currentUserText || '',
    userStatus: state.currentUser.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateText(event) {
      dispatch({type: 'UPDATE_CHANNEL_INPUT_TEXT', value: event.target.value})
    },
    submitMessage() {
      dispatch({type: 'SUBMIT_CHANNEL_INPUT_TEXT'})
    }
  };
}

const ChannelTextInput = ({value, updateText, userStatus, submitMessage}) => {
  return (
    <div className='input-group'>
      <input 
        type="text" 
        className='form-control' 
        placeholder={userStatus === 'OFFLINE' ? 'You are offline' : 'Say something'}
        value={value} 
        onChange={updateText} 
        disabled={userStatus === 'OFFLINE'} 
      />
      <div className="input-group-append">
        <button 
          className="btn btn-outline-secondary" 
          type="button"
          onClick={submitMessage}
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
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.currentUser.name,
    status: state.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeStatus: (event) => dispatch({type: 'STATUS_CHANGE', value: event.target.value})
  };
}

const CurrentUser = ({name, status, handleChangeStatus}) => {
  return (
    <div>
      Hi, {name}!
      <select value={status} onChange={handleChangeStatus} >
        <option value="ONLINE">Online</option>
        <option value="OFFLINE">Offline</option>
        <option value="AWAY">Away</option>
      </select>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);
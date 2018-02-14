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
    changeStatus: (event) => dispatch({type: 'STATUS_CHANGE', value: event.target.value})
  };
}

const CurrentUser = ({name, status, changeStatus}) => {
  return (
    <div>
      <h3>Hi, {name}!</h3>
      <select value={status} onChange={changeStatus} className='form-control' >
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
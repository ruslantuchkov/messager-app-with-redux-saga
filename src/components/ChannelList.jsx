import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

const ChannelList = ({channels}) => {
  return (
    <div>
      {/* {channels.map(channel => )} */}
    </div>
  );
}

export default connect(
  mapStateToProps,
)(ChannelList);
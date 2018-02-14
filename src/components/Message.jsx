import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, {owner: ownerId, content}) {
  return {
    ownerName: state.userInfo.find(({id}) => id === ownerId).name,
    text: content.text
  };
}

const Message = ({text, ownerName}) => {
  return (
    <div>
      <b>{ownerName}</b>: {text}
    </div>
  );
};

export default connect(
  mapStateToProps,
)(Message);
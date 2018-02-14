import React from 'react';
import {connect} from 'react-redux';
import Chance from 'chance';

function mapStateToProps(state, {id}) {
  const {name, status} = state.userInfo.find(({id: userId}) => userId === id);
  return {
    name,
    status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openChannel(id) {
      dispatch({type: 'SET_ACTIVE_CHANNEL', id})
    }
  }
}

const Contact = ({id, name, status, openChannel}) => {
  return (
    <div className='media'>
      <img className="mr-3" style={{width:75, height:75, backgroundColor:new Chance(id).color({format:"rgb"})}}/>
      <div className='media-body'>
        <h4>{name}</h4>
        {status === 'OFFLINE' ? <span>(Offline)</span> : 
        <span className='btn btn-outline-secondary' onClick={() => openChannel(id)}>Chat</span>}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
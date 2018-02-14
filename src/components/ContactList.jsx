import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from './Contact';

function mapStateToProps(state) {
  return {
    currentUserName: state.currentUser.name,
    contacts: [...state.currentUser.contacts.map(contactId => state.userInfo.find((user) => contactId === user.id))]
  };
}

const ContactList = ({currentUserName, contacts}) => {
  return (
    <div>
      <h3>{currentUserName}'s Contacts</h3>
      {contacts.map(contact => <Contact key={contact.id} {...contact} />)}
    </div>
  );
}

export default connect(
  mapStateToProps,
)(ContactList);
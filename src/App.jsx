import React from 'react';
import ChannelList from './components/ChannelList';
import ChannelContent from './components/ChannelContent';
import CurrentUser from './components/CurrentUser';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <div>
      <h1>Redux Messenger </h1>
      <ChannelList />
      <ChannelContent />
      <CurrentUser />
      <ContactList />
    </div>
  );
};

export default App;
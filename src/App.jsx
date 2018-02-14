import React from 'react';
import ChannelList from './components/ChannelList';
import Chat from './components/Chat';
import CurrentUser from './components/CurrentUser';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <div>
      <h1>Redux Messenger </h1>
      <ChannelList />
      <Chat />
      <CurrentUser />
      <ContactList />
    </div>
  );
};

export default App;
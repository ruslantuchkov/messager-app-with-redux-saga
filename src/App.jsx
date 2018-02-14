import React from 'react';
import ChannelList from './components/ChannelList';
import ChannelContent from './components/ChannelContent';
import CurrentUser from './components/CurrentUser';
import ContactList from './components/ContactList';
import ChannelTextInput from './components/ChannelTextInput';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className='navbar-header'>
            <a className="navbar-brand" href="#">Redux Messenger</a>
          </div>  
        </div>
      </nav>
      <div className="row">
        <div className="col-xs-3">
          <ChannelList />
        </div>
        <div className="col-xs-6">
          <ChannelContent />
          <ChannelTextInput />
        </div>
        <div className="col-xs-3">
          <CurrentUser />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
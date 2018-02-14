import React from 'react';

const Contact = ({name, status}) => {
  return (
    <div>
      {name}
      {status === 'OFFLINE' ? '(Offline)' : <button>Chat</button>}
    </div>
  );
};

export default Contact;
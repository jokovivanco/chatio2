import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './BodyChat.css';

const BodyChat = ({ messages, username }) => {
  return (
    <ScrollToBottom className="scroll">
      {messages.map((message, index) => (
        <div key={index.toString()} style={{ marginBottom: 10, display: 'flex', alignItems: username === message.user ? 'flex-start' : 'flex-end', flexDirection: 'column', marginLeft: 10, marginRight: 10 }}>
          <p style={{ fontWeight: 'bold' }}>{message.user}</p>
          <p>{message.text}</p>
        </div>
      ))}
    </ScrollToBottom>
  )
};

export default BodyChat;

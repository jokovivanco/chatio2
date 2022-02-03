import React from 'react';

const FooterChat = ({ setMessages, message, setMessage, socket, username, room }) => {
  const sendMessage = async event => {
    event.preventDefault();

    if (message === '') return;

    const data = { user: username, text: message, room };
    await socket.emit('sendMessage', data);
    setMessages(prev => [...prev, data]);
    setMessage('');
  }

  return (
    <form onSubmit={sendMessage} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 20, boxSizing: 'border-box', backgroundColor: 'green' }}>
      <input value={message} onChange={event => setMessage(event.target.value)} style={{ flex: 1 }} />
      <button type="submit" style={{ width: '20%' }}>Send</button>
    </form>
  );
};

export default FooterChat;

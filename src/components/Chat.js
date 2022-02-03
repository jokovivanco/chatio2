import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

import HeaderChat from '../components/HeaderChat';
import BodyChat from '../components/BodyChat';
import FooterChat from '../components/FooterChat';

const socket = io('http://localhost:3001');

const Chat = () => {
  const { state: { username, room } } = useLocation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('join', { username, room });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [username])

  useEffect(() => {
    socket.on('messages', message => setMessages(prev => [...prev, message]))
  }, [username])

  return (
    <div style={{ width: '100%', height: '100vh', padding: '3em', border: '1px solid #000', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '35%', height: '60%', border: '1px solid #000', display: 'flex', flexDirection: 'column' }}>
        <HeaderChat room={room} />
        <BodyChat messages={messages} username={username} />
        <FooterChat setMessages={setMessages} message={message} setMessage={setMessage} socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;

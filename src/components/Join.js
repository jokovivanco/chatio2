import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    room: ''
  });

  const handleChange = event => setInput({
    ...input,
    [event.target.name]: event.target.value
  });

  const joinChat = event => {
    event.preventDefault();

    if (input.name !== '' && input.room !== '') {
      navigate('/chat', {
        state: {
          username: input.username,
          room: input.room
        }
      });
    }
  }

  return (
    <div>
      <form onSubmit={joinChat} autoComplete="off">
        <input type="text" name="username" value={input.username} onChange={handleChange} placeholder="Username..." />
        <input type="text" name="room" value={input.room} onChange={handleChange} placeholder="Room..." />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  );
};

export default Join;

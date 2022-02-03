import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
  <Routes>
    <Route path='/' element={<Join />} />
    <Route path='/chat' element={<Chat />} />
  </Routes>
)

export default App;

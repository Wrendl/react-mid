import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/post/:id' element={<Post/>} />
        <Route path='/profile/' element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;

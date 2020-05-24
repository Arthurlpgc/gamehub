import React from 'react';
import Profile from './Profile';
import './App.css';
import account from './config';

function App() {
  return (
    <div className="App">
      <Profile {...account}/>
    </div>
  );
}

export default App;

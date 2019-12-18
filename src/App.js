import React from 'react';
import './App.scss';
import Growth from './pages/Growth';
import Clock from './pages/Clock';
import MyGit from './pages/MyGit';
import NameTag from './pages/NameTag';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameTag />

        {/*
        <MyGit />
        <Clock />
        <Growth /> */}
      </header>
    </div>
  );
}
export default App;

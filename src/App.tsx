import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getLatestMovie } from 'Requests';

function App() {
  const handleClick = () => {
    getLatestMovie().then((res) => {
      console.log(res)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClick}>log latest movies</button>
      </header>
    </div>
  );
}

export default App;

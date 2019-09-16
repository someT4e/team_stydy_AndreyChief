import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './components/link'; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org"> Learn React 1</Link>
        <Link href="https://google.com"> Google </Link>
      </header>
    </div>
  );
}

export default App;

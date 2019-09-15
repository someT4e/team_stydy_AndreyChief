import React from 'react';
import logo from './logo.svg';
import './App.css';

const Link = (props) => {

  return ( 
    <a 
      className="App-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >{props.children}</a>)
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link 
          href="https://reactjs.org" >
                 
          Learn React 1
        </Link>
        <Link 
          href='https://google.com'
               
        >Google</Link>
      </header>
    </div>
  );
}

export default App;

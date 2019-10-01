import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Link } from './components';
import About from './pages/about';
import Pg404 from './pages/404';



function App() {
  return (
    <Router> 
      <div className="App">
        
        <Route path="/about" component={About} />
        <Route path="/404" component={Pg404} />
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <Link href="https://reactjs.org"> Learn React 1</Link>
          <Link href="https://google.com"> Google </Link>
        </div>  
      </div>
    </Router>  
  );
}

export default App;

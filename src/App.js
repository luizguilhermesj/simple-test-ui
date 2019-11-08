import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactComponents } from 'webcomponents-lib';
const { Checkbox } = ReactComponents;
//const Checkbox = reactComponents.dataEntry.Checkbox;

function App() {
  console.log(Checkbox);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <Checkbox/>
      </header>
    </div>
  );
}

export default App;

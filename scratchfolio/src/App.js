import React from 'react';
import logo from './logo.svg';
import theMeat from './components/TheMeat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Header H3</h3>
      </header>
      <body>
        {theMeat}
        hello
      </body>
    </div>
  );
}

export default App;

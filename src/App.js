import React from 'react';
import DatePicker from './DatePicker'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-ahgLogo">AHG</span>
        <span className="App-ahgName">Armpittsburgh Hotel Group</span>
      </header>
      <div className="App-main">
        <img className="App-heroImg" src="/house-of-bars.jpg" />
        <div className="App-page">
          <div className="App-contents">
            <h1 className="App-title">Experience the House of Lars</h1>
            <DatePicker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

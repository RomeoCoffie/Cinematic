import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import FullApp from './FullApp';


class App extends Component {
  render () {
  return (
    <BrowserRouter>
    <div className="App">
      <FullApp />
    </div>
    </BrowserRouter>
  )};
}

export default App;

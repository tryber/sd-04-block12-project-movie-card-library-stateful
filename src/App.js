import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibray from './components/MovieLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibray />
      </div>
    );
  }
}

export default App;

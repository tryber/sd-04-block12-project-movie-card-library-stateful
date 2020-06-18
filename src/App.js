import React, { Component } from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={data} />
      </div>
    );
  }
}

export default App;

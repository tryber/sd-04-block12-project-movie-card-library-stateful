import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import moviesArray from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={moviesArray} />
    </div>
  );
}

export default App;

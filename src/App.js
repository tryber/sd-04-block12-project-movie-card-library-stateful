import React from 'react';
import './App.css';

import Header from './components/Header';
import movies from './data';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;

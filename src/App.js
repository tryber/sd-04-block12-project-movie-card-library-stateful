import React from 'react';
import './App.css';

import Header from '../src/components/Header';
import movies from '../src/data';
import SearchBar from '../src/components/SearchBar';
import MovieLibrary from '../src/components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary movies= {movies} />
    </div>
  );
}

export default App;
